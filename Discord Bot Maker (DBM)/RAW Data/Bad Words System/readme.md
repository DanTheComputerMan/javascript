# THIS COMMAND REQUIRES THE FOLLOWING NODE MODULE TO WORK: `quick.db`
If you don't have this, open up your command prompt / cmd.exe and type this:
```css
npm i quick.db@7.0.0-b21
```
If you're *still* having issues with it, run this and wait (it takes awhile), then install `npm i quick.db@7.0.0-b21` again:
```css
npm install --global --production windows-build-tools
```

For best results, place the bot with admin permissions, and with the highest role. Regardless of your setup however, this cannot kick/ban the server owner, based on the Discord API; it can still delete their offending message though. At the bare minimum, the bot needs `manage messages` permission to operate, and the `kick, ban, and manage messages` permissions to setup this system.

## Guide on how to use the system:
For this example, the prefix will be `!`. Yours may vary, and if so, substitute your prefix instead.
```css
!BadWordSetup guide         (Shows you this page)
!BadWordSetup check         (Checks if the system is enabled or disabled).
!BadWordSetup enable        (Enables the system if it isn't enabled already).
!BadWordSetup disable       (Disables the system if it isn't disabled already).
!BadWordSetup addwords      (Adds bad words to the list).
!BadWordSetup delwords      (Removes bad words from the list. MAKE SURE YOU HAVE THE SYSTEM DISABLED FIRST!!!).
!BadWordSetup config        (Various config options on how to customize the way it identifies bad words).
!BadWordSetup logchannel    (Sets the bad word (and error) log channel for the bot).
```


## Add words guide

**`!BadWordSetup addwords word1 | word2|word3|word4|multiple words| multiple words 2`**   Doing this will add each word split by the pipe character `|`, and assign it the delete action. You can also do:

**`!BadWordSetup addwords word1:delete| word2:ban|word3:kick|word4:ban|multiple words:kick| multiple words 2:delete`**   You can also have words/phrases that include the colon character `:` as well:

**`!BadWordSetup addwords word1:word2 | word2:word5|word3:word99|word4:word15:delete|multiple words:1500| multiple words 2:niceness:ban`**

## Config menu guide
**`!BadWordSetup config usertype check`**   Checks the current user type (*@mention* or *usertag*) This will show up as @CoolGuy or CoolGuy#9889
**`!BadWordSetup config wordtype check`**   Checks the current word matching method (*matchany*, *matchanycasingmatters*, *matchword*, or *matchwordcasingmatters*)

***Breakdown:     (Sample string user typed: `Oh Hello Bob, I am going to the store today.`)   and the bad word `hell`.***
###### `matchany`: Does match. Exact 'hell' found in string (doesn't count casing). Doesn't matter that o is after hell *(Not recommended)*.
###### `matchanycasingmatters`: Does not match. Exact 'hell' not found in string (casing matters) *(Also not recommended)*.
###### `matchword`: Does not match. 'hell' word is not found b/c it's part of a larger word 'hello' (regardless of casing) *(recommended method)*.
###### `matchwordcasingmatters`: Does not match. 'hell' word is not found b/c it's part of a larger word 'hello'.

***Another Example:     (Sample string user typed: `Oh Hell Bob, that sucks for you, considering you're inhell`)   and the bad word `hell`.***
###### `matchany`: Does match. Exact 'hell' found in string (doesn't count casing).
###### `matchanycasingmatters`: Does match. Exact 'hell' found in string.
###### `matchword`: Does match. 'hell' is found (regardless of casing) *(recommended method)*.
###### `matchwordcasingmatters`: Does not match. 'hell' word is not found (casing matters).



Future features planned (and ones completed):
- [x] Added config option
- [x] Added log channel
- [ ] Character subsitution (@ = a)
- [ ] Character set match types (A-z, À-ÖØ-öø-ÿ) (I'm not talking about it supporting unicode as it does that already).
