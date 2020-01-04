# Day Scheduler 
A day planner with 
- Active hour indicator
- Auto update of current hour indicator
- Save each hour plan
  
## Code Details
### UI
__index.html__
HTML file to display day planner 
- Banner 
- Current day and time
- Hourly schedule with save button 

### Styling
__style.css__
To style the day planner page

### Script
__script.js__  
Script file to manage user actions
- **loadDp()** - This funtion loads the main planner content, sets up the clock display. This is called when html page loads
- **setClock()** - This function uses moment js to show running clock, also to change color indicator based on current hour
- **setSchedule(hour)** - This function stores the user schedule details with hour as key to local storage
- **getSchedule(hour)** - To get hourly schedule from local storage 