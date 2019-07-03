# THIS COMMAND REQUIRES THE FOLLOWING NODE MODULE TO WORK:
`quick.db` If you don't have this, open up your command prompt / cmd.exe and type this:
```css
npm i quick.db@7.0.0-b21
```
If you're *still* having issues with it, run this and wait (it takes awhile), then install `npm i quick.db@7.0.0-b21` again:
```css
npm install --global --production windows-build-tools
```

For best results, place the bot with admin permissions, and with the highest role. Regardless of your setup however, this cannot kick/ban the server owner, based on the Discord API; it can still delete their offending message though. At the bare minimum, the bot needs `manage messages` permission to operate.

## Guide on how to use the system:
For this example, the prefix will be `!`. Yours may vary, and if so, substitute your prefix instead.
```css
!BadWordSetup guide         (Shows you this page)
!BadWordSetup check         (Checks if the system is enabled or disabled).
```
