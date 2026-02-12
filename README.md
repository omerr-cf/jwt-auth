# jwt-auth

make this perfect

building blocks --->

Typesss first -> shread -> sign in req , login req , publicuser , AuthResponse token and user ,

client -> Authaction type, ApiErrorResponse
server -> db user , jwtpayload, AuthRequest

server

create shraed type for dto

creat routers

router sign up -> get user || err -> check if user already exists -> hash password || err -> generate token -> create user -> push to users list -> return token with user || error
router login -> get user || err -> find user from users || err -> validate password || error -> generate token -> retunr token with user || error
router user -> pass middelware -> next() decoded user -> find user id with decode id -> retunr user

create middelware

-> get headers -> check for Bearer or headers exists || error -> get token -> verify user jwt -> decode -> req.user jwtpayload (id, emai) - next() || error

create func -> generate token

create .env JWT_SECRET

create constants with:

process JWT_SECRET
JWT_EXPIRES_IN = "15m"

users list

client

.env vite base url

create constants with:

TOKEN KEY
AUTH_QUERY_KEY

new query client

create pages
login
signup
profile

app -> react router

creat protected route outlet

create api layer ->

create api intreceptor - with base url + apply token in header

signup - post
login - post
user - get

create react query layer with mutatiosn

creat custom hook for useauthForm sheared inpute and setters and handle function

create sign up content - use hook
