import { google } from 'googleapis';

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: process.env.GOOGLE_CREDENTIALS
        ? JSON.parse(process.env.GOOGLE_CREDENTIALS)
        : undefined,
      keyFile: process.env.GOOGLE_CREDENTIALS
        ? undefined
        : process.env.GOOGLE_KEYFILE,
      scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    const res = await calendar.events.list({
      calendarId: process.env.CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return Response.json(res.data.items || []);
  } catch (error) {
    console.error('Calendar API error:', error.message);
    return Response.json([], { status: 200 });
  }
}