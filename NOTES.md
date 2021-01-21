Tic Tac Toe

# Login/Welcome Screen

## Feature/Action

* input nama

## Event List

* user -> server : user connected

# Room Screen

## Feature/Action

* list room
* create room
* join room

## Event List

* server -> user : list room
* user -> server: create room
* server -> user: room created
* user -> server: join room

# Game Screen

## Feature/Action

* player ready
* assign player icon
* player turn
* game board
* click grid
* calculate win condition
* number of match/score
* reset
* send message
* receive message

## Event List

* user2 -> server: join room
* server -> user: room ready
* server -> user1: your turn
* user1 -> server: click square
* server -> user2 -> your turn

# Server Action

## Feature/Action

* hapus room

## Event List

# Brainstorm

* perlu persistent ngga?

# Event List
