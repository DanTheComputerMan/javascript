# THIS COMMAND REQUIRES THE FOLLOWING NODE MODULE TO WORK: `quick.db`
If you don't have this, open up your command prompt / cmd.exe (in your bot directory) and type this:
```css
npm i quick.db@7.0.0-b21
```
If you're *still* having issues with it, run the below command in powershell as an administrator and wait (it takes a while and can take up to 10 minutes or so), then install `npm i quick.db@7.0.0-b21` in cmd (in your bot directory) again after that:
```css
npm install --vs2015 -g windows-build-tools
```
***STILL*** having issues? Alright, since your computer doesn't like being set up properly, we have to do this sequence:
Powershell (as Administrator):
```css
npm i node-gyp
npm install --global --production windows-build-tools
```
or
```css
npm -g --add-python-to-path install windows-build-tools node-gyp
```
Now, after you do one of the above, and wait for it to finish, go back to cmd (in your bot directory), and type this one final time:
```css
npm i quick.db@7.0.0-b21
```
*Note:* this may or may not work if you don't run this on Windows.

For best results, place the bot with admin permissions, and with the highest role. Regardless of your setup however, this cannot kick/ban the server owner, based on the Discord API; it can still delete their offending message though.
To setup this system, you must either be the server owner, have `administrator` permission, or have the `manage guild` permission. In addition, the bot must also have these permissions : `kick, ban, and manage messages`. This is not the case when the system is turned on, it just applies to setting up the bot. At the bare minimum, the bot requires `manage messages` permission to properly function and delete the messages.


## Guide on how to use the system:
For this example, the prefix will be `!`. Yours may vary, and if so, substitute your prefix instead. The default alias is `bws`.
```css
!BadWordsSetup guide         (Shows you this page)
!BadWordsSetup check         (Checks if the system is enabled or disabled).
!BadWordsSetup enable        (Enables the system if it isn't enabled already).
!BadWordsSetup disable       (Disables the system if it isn't disabled already).
!BadWordsSetup addwords      (Adds bad words to the list).
!BadWordsSetup delwords      (Removes bad words from the list. MAKE SURE YOU HAVE THE SYSTEM DISABLED FIRST!!!).
!BadWordsSetup config        (Various config options on how to customize the way it identifies bad words).
!BadWordsSetup logchannel    (Sets the bad word (and error) log channel for the bot).
```
## Add words guide    
<details>
  <summary>Click to view/hide</summary>
  <p>
<!--  -->
    
**`!BadWordsSetup addwords word1 | word2|word3|word4|multiple words| multiple words 2`**   Doing this will add each word split by the pipe character `|`, and assign it the delete action. You can also do:

**`!BadWordsSetup addwords word1:delete| word2:ban|word3:kick|word4:ban|multiple words:kick| multiple words 2:delete`**   You can also have words/phrases that include the colon character `:` as well:

**`!BadWordsSetup addwords word1:word2 | word2:word5|word3:word99|word4:word15:delete|multiple words:1500| multiple words 2:niceness:ban`**
</p></details>


## Config menu guide   
<details>
  <summary>Click to view/hide</summary>
  <p>
<!--  -->
    
**`!BadWordsSetup config usertype check`**   Checks the current user type (*@mention* or *usertag*) This will show up as [@CoolGuy](https://github.com/DanTheComputerMan/javascript/edit/master/Discord%20Bot%20Maker%20(DBM)/RAW%20Data/Bad%20Words%20System/readme.md) or CoolGuy#9889

**`!BadWordsSetup config wordtype check`**   Checks the current word matching method (*matchany*, *matchanycasingmatters*, *matchword*, or *matchwordcasingmatters*)

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
</p></details>



## Delete words guide   
<details>
  <summary>Click to view/hide</summary>
  <p>
<!--  -->
    
**`!BadWordsSetup delwords word1 | word2|word3|word4|multiple words| multiple words 2`**   Doing this will remove each word split by the pipe character `|` from the bad word list. __**REMEMBER TO DISABLE THE SYSTEM FIRST, AS THE BOT WILL TRY TO DELETE THOSE WORDS**__

</p></details>



## Log channel guide   
<details>
  <summary>Click to view/hide</summary>
  <p>
<!--  -->
    
**`!BadWordsSetup logchannel #bad-word-log`**   Mention a channel to set that channel as the log channel for your guild.

</p></details>



Potential future features (and ones completed):
- [x] Added log channel
- [x] Added config option
- [ ] Wildcard support (* can be any character)
- [ ] Character subsitution (@ = a)
- [ ] Allowing per-server download-able lists (and potentially uploading full lists)
- [ ] Character set match types (A-z, À-ÖØ-öø-ÿ) (I'm not talking about it supporting unicode as it does that already).
