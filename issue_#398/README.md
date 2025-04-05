# Issue #397 of rendezvous with cassidoo

## Interview question of the week

This week's question:
Write a function that takes an array of timestamps (HH:MM) from the same day and returns the longest gap in minutes between consecutive timestamps.

### Example Usage

```javascript
findLongestTimeGap(['12:00'])
0

findLongestTimeGap(['09:00', '11:00'])
120

findLongestTimeGap(['14:00', '09:00', '15:00', '10:30'])
210

findLongestTimeGap(['08:00', '10:00', '10:00', '14:00'])
240
```
