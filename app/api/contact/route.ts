import { NextResponse, NextRequest } from "next/server";
import { google } from "googleapis";


type ContactForm = {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
};

export async function POST(
    request: NextRequest & { body: ContactForm },
    response: NextResponse & { status: (arg0: number) => { send: (arg0: { body: { message: string; data?: any; }; }) => void; }; },
) {
    if (request.method !== 'POST') {
        return response.status(405).send({
            body: { message: 'Method not allowed' }
        });
    }

    const body = request.body as ContactForm;

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.NEXT_GOOGLE_CLIENT_EMAIL,
                private_key: process.env.NEXT_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')

            },
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets',
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file'
            ]
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const res = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.NEXT_GOOGLE_SHEET_ID,
            range: 'A1:D1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.name, body.phone, body.email, body.message]
                ]
            }
        });

        return response.status(200).send({
            body: {
                data: res.data,
                message: 'Data has been saved successfully!'
            }
        });

    } catch (error) {
        return response.status(500).send({
            body: { message: 'Internal Server Error' }
        });

    }

}

