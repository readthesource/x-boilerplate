# mac setup
# outline of steps to do

# set variables for repository based on shell args
  # readthesource_repo
  # readthesource_path

# check for brew
  # if brew isn't there install it
  # else next
# check for git
  # if git isn't there install it with brew
  # else next
# check for node
  # if nodejs isn't there install:
    # brew install nvm
    # use nvm to install node
    # set stable version
    # update .bashrc with version
  # else next
# check for npm
  # if npm isn't there install it
  # else next
# git clone $readthesource_repo $readthesource_path
# npm install -g grunt-cli
# cd $readthesource_path
# npm install
# bower install if a bower.json is there
# setup complete - display
  # options for running server
  # adding js, css, img
