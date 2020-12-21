# Horse App FrontEnd Build **v.5**

## Philosopy ##
    * Horse app will allow users to view horses, 
    * Sign up for the app, 
    * Add Horses
    * Login into the App
    * Log Out of the App
    * View Ownership Status of a Horse

 ## Purpose ## 
    * The app is designed to allow horse owners and enthusiasts to interact on a platform that allows them to manage their horses easily.  The will be able to view their own horses add horses to the registry, update and eventually review horses as well.  The goal of the application will be to create an app that builds a customer base buy allowing users to interact easily online.  


## Structure ##
    A. Index
        - Holds the primary imports to run the app including react components and redux
        - Links to App.js which will be the primary page the app is rendered to
    B. App.js 
        - will house routing and primary access to pages
        - App.js will pass information to components and manage routes
    C.  Reducer 
        The reducer directory will house all of the smaller reducers that will be linked together through combineReducers with added to the redux store.  

        Current Reducers Include
        1.  Horses Reducer - Manages the horse state (horseReducer.js)
        2.  Users Reducer - Manages the user state (usersReducer.js)

    D.  Containers 
        Containters will house components and modify state.   Users and horse information will be updated and information will be passed down through components to the DOM.  

        Horse Containers will update individual and collective horse states based on the changes made by users.  
        /src/containers/horsePage.js - Update indidual horses
        /src/containers/horsePages.js - Update the group of horses

        User Containers will update individual users and the collective set of users 

        /src/containers/Login.js  - allows a user to log into the site
        /src/containers/Logout.js  - allows for sign out to occur
        /src/containers/SignupForm.js - allows for signup to occur

    E.  Components 
        Horse components recieve information from horce containers and are rendered to the screens of users.  
        Our conponents include forms that allow for users to be created via update 

        /src/components/HorseCard.js - renders a smaller card of horce informtion
        /src/components/HorseForm.js - renders the horse signup form
        /src/components/Horses.js - renders individual cards after taking the database of horses as props.  
        .....

    F.  Actions

        Horse and user action creators are stored in the actions folders.  When asynchronous calls are made fuctions housed in the action controller where information is gather and send to their respective reducers to update state.  

        /src/actions/horseActionCreators.js - manages horse actions, fetch calls
        /src/actions/userActionCreators.js  - manages user actions and fetch calls
## Set Up

The app was built using: 
    1.  npx create-react-app - to create the app
    2.  yarn add @material-ui/core
    3.  yarn add @material-ui/icons
    4.  yarn add react-redux
    5.  yarn add redux-thunk
    6.  yarn add react-router-dom

To start the application a user must download the client and server side programs.  The have to start the rails server using the command: rails s.  They must start the client side server using yarn start.  
        
### Server Side

The server side of the application was created using rails.  Multiple gem are bundled as a requirement of this app to work successfully.  They include:

gem 'bcrypt', '~> 3.1.7' - Allows for password encription
gem 'csv' - allow for csv files to be manipulated
gem 'jwt' - creates a token that can be passed to a user to identify them
gem 'dotenv-rails' - allow user to store keys in secret and allow for users to access them, i.e. when creating jwt tokens

gem 'faker' - is used to populate the server with fake data
gem 'active_model_serializers' - allow the server to manipulate the information forwarded to the client side 
gem 'pg', '>= 0.18', '< 2.0' - allow to data storage on a database that can be utilized on webhosting sites such as Heroku  

## Set up Tasks

1.  Update puma to fetch port 3001 instead of 3000 to avoid conflicts with the client side server.  
2.  Comment out Rack::Cors and whitelist the port your client side server will be communicating on.  Without this authorization communication with the server will fail.  
3. Import csv file to upload horse breeds for future functionality.  
4. Create a rake task that gathers all of the breeds and seeds the database with them.  
--------------------------------------------------------
    namespace :slurp do
    desc "TODO"
    task breeds: :environment do
      require 'csv'
  
      csv_text = File.read(Rails.root.join('lib','csvs', 'horse_breed_data.csv'))
      csv = CSV.parse(csv_text, :headers => true, :encoding => "ISO-8859-1")
      csv.each do |row|
        b = Breed.new
        b.common_name = row["Most common name"]
        b.country = row["Country"]
        b.uses = row["Uses"]
        b.color_comments = row["Color comments"]
        b.adaptablity = row["Adaptability to specific environment"]
        b.save
      end
    end
  end
------------------------------------------------------------------
5.  Generate resources for horses, breeds, users, etc.  user 
    rails g resouces User ....
6.  After resources are Generated migrate the appropriate tables 

        db\migrate\20201203180031_create_users.rb
        db\migrate\20201203180805_create_horses.rb
        db\migrate\20201203182203_create_breeds.rb
        db\migrate\20201205205755_create_reviews.rb
        db\migrate\20201205220331_add_columns_to_horses.rb
        db\migrate\20201205224832_remove_breed_from_horses.rb

## Associations

1. Users
    has_many :horses
    has_many :breeds, through: :horses
    has_many :reviews

2.  Horses   
    belongs_to :user
    belongs_to :breed
    has_many :reviews, :dependent => :delete_all

3.  Breeds 
    has_many :horses
    has_many :users, through: :horses
...

## Controllers

Although the controller set up is standard the sessions contoller should be noted as the controller that manages login and autologin.  
At login the jwt token is passed to the user who can utilize it to automatically log into the website.  The will also have their permissions checked against the jwt token to ensure that they have the proper permissions to access and/or make changes.  