import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { LoginFormProps } from "../types/formComponentProps";
import { Label } from "../components/ui/label";
import ConnectWalletButton from "../Components/ConnectWalletButton";

export function UserAuthForm({ entityType }: LoginFormProps) {
  const signupUrl =
    entityType === "customer" ? "/customer/login" : "/provider/login";
  return (
    <div className={cn("grid gap-6")}>
      <form>
        <div className="grid gap-6">
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="avatar">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Link to your name"
              type="text"
              autoCapitalize="none"
              autoComplete="url"
              autoCorrect="off"
              required
            />
          </div>
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              required
            />
          </div>
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter your Password"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              required
            />
          </div>

          <a
            href={signupUrl}
            className="text-sm text-muted-foreground hover:text-sky-600"
          >
            Sign in instead?
          </a>
          <ConnectWalletButton />
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
}
