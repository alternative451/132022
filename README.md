# DEATH : an elite rhythm game with bars

Rhythm game with bar, only bars, bars everywhere

Press A for attack, long press for heavy attack
Press B to trigger a dodge

### Ideas

- progressive
  - hp bar
  - attack bar
  - dodge bar
  - ...
- progressive
  - simple attack
  - complex attack
  - mixed attack
  - dual attack
  - multiple enemies
  - boss
- screens
  - title
  - menu
  - main combat
  - map
  - simplified items
- more from rhythm games
  - anticipated patterns
  - disappearing bars
- ui / ux
  - retro
  - gl
  - background change
  - "camera" shaking
  - bars patter for enemy identification
 
### Api

#### Bars
 
 ```
 - vec2 pos
 - vec2 size
 - arr[vec2] durations
 - arr[vec2] windows
 - arr[ENUMS] windows effects
 - object theme
 
 - start()
 - stop()
 - reset()
 - desctruct()
 - construct()
 ```
 
#### Screen manager

```
 register(screen)
 load()
 start()
```
