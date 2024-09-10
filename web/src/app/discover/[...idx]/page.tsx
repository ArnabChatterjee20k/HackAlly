import DescriptionLoader from "@/components/DescriptionLoader";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Dot } from "lucide-react";
import Link from "next/link";
import React from "react";
const data = [{'type': 'heading', 'text': 'Requirements', 'list': []}, {'type': 'description', 'text': '', 'list': []}, {'type': 'description', 'text': 'WHAT TO BUILD', 'list': []}, {'type': 'description', 'text': 'Build a working app (web, mobile or desktop) using Convex. The app must use Convex Auth or one of the recommended Auth providers\xa0and other Convex features.', 'list': []}, {'type': 'list', 'text': '', 'list': [['Best full-stack app that uses Convex (overall)'], ['Best Startup Idea'], ['Best use of AI with Convex in your app'], ['Most Viral App on', 'or']]}, {'type': 'description', 'text': 'Complete Hackathon Milestones', 'list': []}, {'type': 'description', 'text': 'Milestone 1: Getting Started', 'list': []}, {'type': 'list', 'text': '', 'list': [['Join Convex Discord #'], ['Create your app idea and form your team (max 4).'], ['Create your Convex Account'], ['If you’re new to Convex,'], ['Setup', 'or one of the', 'Auth providers in your app']]}, {'type': 'description', 'text': 'Milestone 2: Deploy Your App', 'list': []}, {'type': 'list', 'text': '', 'list': [['Ensure your app runs locally.'], ['Test your app (', ')'], ['Deploy your app using one of the suggested options', '.']]}, {'type': 'description', 'text': 'Milestone 3: Share Your App', 'list': []}, {'type': 'list', 'text': '', 'list': [['Share your app in the Convex Discord #show and tell channel.'], ['Share your app via', 'or', 'and mention Convex'], ['Ask for user feedback in the #hackathon channel.'], ['Submit your working app to judge when the submission period opens.']]}, {'type': 'description', 'text': 'WHAT TO SUBMIT', 'list': []}, {'type': 'list', 'text': '', 'list': [['Provide a public URL of your', 'working app', '.'], ['Provide a public URL to your code repository for judging.', [['If private, please share with']]], ['Include a video (it should be 3 minutes long) demonstrating how your app works and the data in the Convex dashboard.', [['Videos must be uploaded to YouTube, Vimeo, or another server with a public URL.'], ['Judges will not be reviewing beyond 3 minutes.']]], ['Your complete submission form on Devpost before the final deadline.'], ['Please check the', 'for full details.']]}]

export default function Page() {
  return (
    <section className="mt-28 pb-5">
      <Card className="shadow-none bg-white w-[90%] sm:w-[40%] mx-auto gap-3 rounded-sm p-8">
        <CardHeader className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <div className="flex items-center text-blue-950">
              Online <Dot />
              Ongoing
            </div>
            <h4 className="font-extrabold text-blue-950 text-2xl max-w-[90%] text-balance text-center md:text-left">
              Zero to One Hackathon by Convex Vol 2
            </h4>
          </div>
          <Button className="bg-blue-900 text-white font-bold w-full md:w-auto">
            APPLY NOW
          </Button>
        </CardHeader>
        <CardDescription className="px-6">
          <DescriptionLoader data={data}/>
        </CardDescription>
      </Card>
    </section>
  );
}
