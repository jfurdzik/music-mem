# Music Memorization App

## Vision: 
This is an app that can help me and others memorize music more easily and effectively. Mainly for marching band which I am in currently.

## Current Features for MVP:
- create account, login
- upload sheet music (as images)
- select or highlight measures
- record audio of self playing, playback, slow down
- tag uncertain measures, progress tracking
- metronome

## Tech Stacks:
- Frontend: React
- Backend: Node/Express
- Database: PostgreSQL (access via Prisma)

## Mobile Access Approach:
Web first with mobile responsive css design -> PWA (progressive web app) -> potentially React Native (if needed)

### Example workflows:
- Upload sheet music → stored on server (Express) → file path + metadata saved in Postgres → retrieved + displayed
- Record audio → stored on server → linked to sheet music ID in DB
- Tag measures → saved as annotations in DB
- Metronome → frontend-only (React handles it)