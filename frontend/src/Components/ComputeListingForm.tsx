import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

function AIApplicationForm() {
  return (
    <>
      <div className="flex flex-col mx-auto pt-5 pr-2">
        <h4 className="text-5xl font-bold text-black text-center pt-[4rem]">
          List Compute Order
        </h4>
        <Card className="w-full mx-auto mt-[6rem]">
          <CardHeader>
            <CardTitle className="text-xl text-black">List Compute</CardTitle>
            <CardDescription className="text-black">
              Enter information for Compute
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black">
                  Name of Provider
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Sam"
                  required
                  className="text-black placeholder:text-black"
                />
              </div>
              <div className="lg:text-5xl text-4xl  text-black text-center pt-[2rem]">
                <div className="space-y-2 flex flex-col items-start ">
                  <Label htmlFor="category" className="text-black">
                    Type of Compute
                  </Label>
                  <Input
                    id="category"
                    placeholder="GPU RTX 3090"
                    required
                    className="text-black placeholder:text-black"
                  />
                </div>
                <div className="space-y-2 mt-6 flex flex-col items-start ">
                  <Label htmlFor="status" className="text-black">
                    Compute Duration
                  </Label>
                  <Input
                    id="status"
                    placeholder="Production Ready"
                    required
                    className="text-black placeholder:text-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price" className="text-black">
                  Price for Listing
                </Label>
                <Input
                  id="price"
                  type="number"
                  placeholder=""
                  required
                  className="text-black placeholder:text-black"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-[#7C3AED] text-white"
              >
                Create Order
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default AIApplicationForm;
