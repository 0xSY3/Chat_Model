import React, { useEffect } from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Textarea } from "../components/ui/textarea";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate } from "react-router-dom";

export default function VoiceAssistant() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const navigate = useNavigate();

  useEffect(() => {
    if (!listening && transcript) {
      handleVoiceCommand(transcript);
      resetTranscript();
    }
  }, [listening, transcript]);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleVoiceCommand = (command) => {
    if (command.toLowerCase().includes("ai plugin page")) {
      speak("Sure, I can navigate to the AI plugin page.");
      navigate("/plugins");
    } else if (command.toLowerCase().includes("ai application page")) {
      speak("Navigating to the AI application page.");
      navigate("/ai/application");
    } else if (command.toLowerCase().includes("ai binaries page")) {
      speak("Navigating to the AI binaries page.");
      navigate("/binaries");
    } else if (command.toLowerCase().includes("ai apis page")) {
      speak("Navigating to the apis page.");
      navigate("/apis");
    } else if (command.toLowerCase().includes("ai compute page")) {
      speak("Navigating to the apis page.");
      navigate("/list/compute");
    } else {
      speak("Command not recognized. Please try again.");
      console.log("Command not recognized");
    }
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  return (
    <div className="pt-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="w-full"
            aria-label="Activate voice assistant"
            onClick={startListening}
          >
            <MicIcon className="w-5 h-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[400px] p-6">
          <DialogHeader>
            <DialogTitle>Voice Assistant</DialogTitle>
            <DialogDescription>
              Speak your request and we'll do our best to help.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Textarea
                className="flex-1 resize-none"
                placeholder="Transcription will appear here..."
                rows={3}
                readOnly
                value={transcript} // Directly use transcript here
              />
              <Button
                type="submit"
                size="icon"
                onClick={() => handleVoiceCommand(transcript)}
              >
                <SendIcon className="w-5 h-5" />
                <span className="sr-only">Submit</span>
              </Button>
            </div>
            <div className="flex justify-end">
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
