#!/usr/bin/env ruby

# fix a cordova-generated xcodeproj not having any schemas defined.
# sourced from https://gist.github.com/shanesmith/8b88720c19b910cc9900

require 'xcodeproj'

path = ARGV.shift

xcproj = Xcodeproj::Project.open(path)

# Fix schemes not being defined
xcproj.recreate_user_schemes

xcproj.save

