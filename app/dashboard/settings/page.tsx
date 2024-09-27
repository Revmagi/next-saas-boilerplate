
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"

const Settings
 = () => {
  return (
    <Card x-chunk="dashboard-04-chunk-1">
    <CardHeader>
      <CardTitle>Profile Name</CardTitle>
      <CardDescription>
        Update your profile name.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <Input placeholder="Your Name Here" />
      </form>
    </CardContent>
    <CardFooter className="border-t px-6 py-4">
      <Button>Save</Button>
    </CardFooter>
  </Card>
  )
}

export default Settings
