import { serve } from "inngest/next";
import { inngest } from "@/service/inngest/client"
import { clerkCreateUser } from "@/service/inngest/functions/clerk";


export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        clerkCreateUser
    ],
});
