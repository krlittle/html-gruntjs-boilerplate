# web-boilerplate
HTML boilerplate with Sass &amp; Grunt

Requirements:
 - The following needs to be installed and added to your system's PATH:
   - <a href="https://nodejs.org/">Node.js & npm</a>, Grunt requires Node.js version <code>>= 0.8.0 </code>
     <br><i>(<b>NOTE:</b> Node's stable versions are even numbers; odd numbers are for development/unstable versions)</i>
   - <a href="https://www.ruby-lang.org/">Ruby 1.9+</a>
   - <a href="https://github.com/oneclick/rubyinstaller/wiki/Development-Kit">Ruby Development Kit</a>
   - <a href="http://git-scm.com/">Git</a>
 
 - The following command line interfaces need to be installed via npm:
   <br><i>(<b>NOTE:</b> Remember to close and re-open your terminal before making use of these CLIs)</i>
   - <a href="http://gruntjs.com/">GruntJS</a>; <code>npm install -g grunt-cli</code>
   - <a href="http://bower.io/">Bower</a>; <code>npm install -g bower</code>
   
 - The following gem(s) need to be installed via Ruby once you have both Ruby and its development kit on your system's PATH:
   - <a href="http://compass-style.org/">Compass</a>; <code>gem install compass</code>
     <br><i>(<b>NOTE:</b> The Compass gem will install 9 gems in total, one of which is the gem for Sass)</i>

How to use:
<ol>
<li>Make sure you have your requirements covered.
<li>Fork this repository and clone it to your machine.
<li>Navigate to the directory where you cloned web-boilerplate 
<li>Run <code>npm install</code> from the command prompt to get your node dependencies
<li>Run <code>grunt</code> from the command prompt to spin up a livereload server
<li>Open your browser to http://localhost:9000
<li>Make changes in the IDE of your choosing and enjoy.
</ol>

<br><i>(<b>NOTE:</b> The </i><code>build</code><i> folder is meant to be generated code only.  Changes should be made in the </i><code>src</code><i> folder and if you have </i><code>grunt</code><i> running, it will update the </i><code>build</code><i> folder for you.)</i>
