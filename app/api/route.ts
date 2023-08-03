import { NextResponse } from "next/server";

let users: any = []

export const POST = async (req: Request, {params}: {params: any}) => {
  const {name, email} = await req.json();
  users.push({id: users.length+1 ,name, email});

  const url = new URL(req.url)

  const data = Object.entries(url.searchParams)
  return new NextResponse(JSON.stringify({
    message: "user added successfully"
  }), {status: 201,})
 }

 export const GET = async (req: Request, res: Response) => {
  return new NextResponse(JSON.stringify(users), {status: 201,})
 }



