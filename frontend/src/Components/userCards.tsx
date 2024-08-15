import { useState, useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";

export default function Component() {
  const [filter, setFilter] = useState("all");
  const products = [
    {
      name: "GPT-3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 99.99,
      seller: "John Doe",
      type: "api",
    },
    {
      name: "GPT-3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 99.99,
      seller: "Jane Smith",
      type: "api",
    },
    {
      name: "GPT-3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 99.99,
      seller: "Sarah Johnson",
      type: "api",
    },
    {
      name: "ChatGPT",
      description: "Powerful language model for natural conversations.",
      price: 149.99,
      seller: "Vercel",
      type: "web-app",
    },
    {
      name: "Dall-E",
      description: "Create unique and imaginative images with AI.",
      price: 199.99,
      seller: "OpenAI",
      type: "web-app",
    },
    {
      name: "Whisper",
      description: "Accurate speech recognition and transcription.",
      price: 79.99,
      seller: "Anthropic",
      type: "binary",
    },
  ];
  const filteredProducts = useMemo(() => {
    if (filter === "all") {
      return products;
    } else {
      return products.filter((product) => product.type === filter);
    }
  }, [filter, products]);
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold tracking-tight">AI Products</h1>
          <p className="text-muted-foreground">
            Discover the latest AI-powered tools and technologies.
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="shrink-0">
              <FilterIcon className="w-4 h-4 mr-2" />
              Filter by: {filter === "all" ? "All" : filter}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Filter by type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
              <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="api">APIs</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="web-app">
                Web Apps
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="binary">
                Binaries
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="plugin">
                Plugins
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card key={product.name}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Description</p>
                    <p className="text-muted-foreground">
                      {product.description}
                    </p>
                    <p className="font-medium">Price</p>
                    <p className="font-medium">${product.price}</p>
                    <p className="font-medium">Seller Name</p>
                    <p className="text-muted-foreground">{product.seller}</p>
                    <p className="font-medium">Type</p>
                    <p className="text-muted-foreground">{product.type}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">
                <a href="/checkout">Buy Now</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
