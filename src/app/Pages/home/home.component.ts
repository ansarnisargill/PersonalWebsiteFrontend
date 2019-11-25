import { Component, OnInit } from '@angular/core';
import { Post } from 'src/Models/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Posts: Post[] = [];
  constructor() {
  
      let post = new Post();
      post.id = '234';
      post.publishedAt = new Date();
      post.title = `Destructuring Assignment in JavaScript`;
      post.content=`
      <p>Hi there!  </p>

<p>As I continue my journey into the world of JavaScript (JS), one technique that was new to me that I’ve found using a lot is a technique called destructuring assignment.  </p>

<p>Let’s walk through some examples.</p>

<p>Typically in JS, you might assign a value to a variable like this.<br>
</p>

<div class="highlight"><pre class="highlight plaintext"><code>let myString = 'my string';
</code></pre></div>



<p>But what if the value is not literal, and coming from somewhere else? What if its an object and you want to pluck just a few things from it. You might write something like this.<br>
</p>

<div class="highlight"><pre class="highlight plaintext"><code>let myObject = {myString: 'foo', myInt: 42, myBool: true};

// Get out just myString and myInt
let myString = myObject.myString; // or myObject['myString']
let myInt = myObject.myInt; // or myObject['myInt']
</code></pre></div>



<p>But with destructuring assignment, there is a shorter way; both destructuring and assigning in one step:<br>
</p>

<div class="highlight"><pre class="highlight plaintext"><code>let {myString, myInt} = {myString: 'foo', myInt: 42, myBool: true};
</code></pre></div>



<p>Which I think is pretty neat. We use the key of the object on the left-hand side<br><br>
This also works for arrays too…<br>
</p>

<div class="highlight"><pre class="highlight plaintext"><code>let myArray = ['hello', 'there', 'sam']
let [wordOne, wordTwo] = myArray;
// wordOne = 'hello'
// wordTwo = 'there'
</code></pre></div>



<p>You can also skip values too by leaving an empty item in the comma-separated destructuring list…<br>
</p>

<div class="highlight"><pre class="highlight plaintext"><code>let myArray = ['hello', 'there', 'sam']
let [greeting,,name] = myArray;
// greeting = 'hello'
// name = 'sam'
</code></pre></div>



<p>The next thing I’ve found useful is using the <em>rest</em> syntax - that is to say, the syntax which lets you express “Okay, I have my value from this thing now, put the <em>rest</em> in here”<br>
</p>

<div class="highlight"><pre class="highlight plaintext"><code>// With arrays
let arr = [0, 1, 2, 3, 4];
let [first, second, ...others] = arr;
// first = 0
// second = 1
// others = [2, 3, 4]

// With objects

let obj = {foo: 'bar', flopsy: 'topsy', importantThing: '41233219'};
let {importantThing, ...junk} = obj;

// importantThing = '41233219'
// junk = {foo: 'bar', flopsy: 'topsy'};
</code></pre></div>



<p>Pretty cool, right? This is not to be confused with another cool operator, the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread operator</a>, which tends to be used only on the right-hand side of assignments.</p>

<p>So that’s a really quick intro to the syntax, by why would you use it?  </p>

<p>First, it can give more expression to your code. Above when I pulled out <em>importantThing,</em> and left the rest, it hints to the reader that they can stop reasoning about the whole object, and just this variable is now important.   </p>

<p>Secondly, its self documenting, in the case of object destructuring, it can give some hints as to the possible properties on the object without having to find its definition, declaration or instantiation. This is helpful and saves time.   </p>

<p>I think it’s tempting, especially for people like me who come from static, strong typed languages and are new to JS can get a bit fast and loose with code because it’s quite frictionless to write. However, you can quickly get into a mess if you don’t lean into what idiomatic JS looks like. In my short experience to date, destructuring assignment is an important idiom to learn, master and use in order to write clean and easy to follow JS code.  </p>

<p>The full docs are <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">here</a>, do have a read.  </p>`
      this.Posts.push(post);    
  }

  ngOnInit() {
  }

}
