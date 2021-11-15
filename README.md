# recipefinder
## Description
User can search for recipes with the ingredient you have, filtering by the choice of the diet-preference. Check the recipe and  can also add it to the favourites, which is saved in the database and can be displayed.

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called facebook: `mysql -u root -p`
- Add a `.env` backend file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=recipes
  DB_PASS=YOURPASSWORD
```


​
# Architeture
​
## Backend
​
- `routes` contains routes using express for https requests GET and POST.

![Backend](/pictures/api.jpg)



## Database
### DB design
​
![database.jpg](/pictures/database.jpg)
​
# Frontend

- `.env` frontend file, contains secret key for api.

## userflow
![User_Flow.png](/pictures/User_Flow.png)
​
​


"credit": 
   _This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._

