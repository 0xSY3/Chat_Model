from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
from groq import Groq
from langchain.chains import ConversationChain
from langchain.chains.conversation.memory import ConversationBufferWindowMemory
from langchain_groq import ChatGroq
from dotenv import load_dotenv

load_dotenv()

groq_api_key = os.environ['GROQ_API_KEY']

app = FastAPI()

class ChatRequest(BaseModel):
    question: str
    model: str = "mixtral-8x7b-32768"
    memory_length: int = 5

class ChatResponse(BaseModel):
    response: str

# Initialize conversational memory
memory = ConversationBufferWindowMemory(k=5)

# Define the context
MyContext = "Only answer from the given data, and if the question is not related to AI marketplaces, decentralized buying and selling of AI inference models, web apps, REST APIs, or plugins, then say 'Sorry, I am unaware about this topic.' My app is about an AI marketplace where users can buy, sell, and train AI models and data in a decentralized manner."

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        # Update memory length based on request
        memory.k = request.memory_length
        
        # Initialize Groq Langchain chat object and conversation
        groq_chat = ChatGroq(
            groq_api_key=groq_api_key, 
            model_name=request.model
        )

        conversation = ConversationChain(
            llm=groq_chat,
            memory=memory
        )

        # Include the context in the prompt
        full_prompt = f"{MyContext}\nAnd The Question is: {request.question}"
        response = conversation(full_prompt)
        
        return ChatResponse(response=response['response'])

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
