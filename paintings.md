---
layout: projects
title: A Web App that Interprets Paintings
tile-description: An AI experiment intended to delve into a machine's perspective when interpreting paintings <br /> 
description: Exploring Computational Creativity - A web app that generates sentences based on its analysis of a given input painting
skills: PyTorch, ResNet-50, GPT-2, Flask, React
link: 
link_class:
image: assets/images/painting.jpg 
nav-menu: true
order: 4
---
<!--Click on the link provided to see what the model has to say about a given painting! - add to description-->
<!-- Main -->
<div id="main">
<section id = "one">
	<div class="inner">
	<span class="image main">
		<img src="https://raw.githubusercontent.com/shalinirago/portfolio/main/webapp.gif" alt="" data-position="center center" /> <!--Create a gif for the web app-->
		<figcaption><blockquote>The web app that describes paintings</blockquote></figcaption>
	</span></div> 
		<div class="content">
			<div class="inner">
			<div class="row">
                <div class="6u 12u$(small)" style="padding: 50px">
					<h3>We know computers can create visual forms of art: but can they understand or interpret art?</h3>
					<p>
					The current deep learning systems are advancing to caption images accurately, however, a mere captioning system does not do justice to put forth a description of paintings that is interpretive in nature. <br />
					This designed system is, in a way, an investigation to push the creative possibilities of computers; finding meanings in Art is purely subjective and we intended to hear a computer's outlook on paintings.
					</p>
					<div class="inner">
						<ul>
							<li>Humans writing Formal Analysis of paintings perform a multi-step process to analyse not only the contents but the composition, form, context to grasp the meaning of the painting.</li>
							<li>A similar technique was designed and implemented, through the means of collaboration with the Art Departmen at Virginia Tech, to extract the form elements of the painting using Computer Vision algorithms</li>
							<li>Based on the image features extracted, corresponding natural language sentences were generated to output sentences to describe what the model has seen in the paintings analysed</li>
							<li>Using Flask-RESTful and React, a comprehensive web app was built to deploy the entire system - users can upload images and hit "Analyse" to see what the model has to say about the painting</li>
						</ul>
					</div>
                </div>
				<div class="6u 12u$(small)" style="padding: 50px">
				<h3>A sample output produced by the model for the cubist painting <i>Femme Cubiste</i> by Albert Gleizes</h3> <br />
				<h4>Note: This is a test painting that the model has not seen before</h4>
					<div class="inner">
					<blockquote>The Painting is of the style Cubism, the German Expressionism, the Expressionism of the 1940s and 1950s, the Expressionism of the 1960s, and, most notably, the Expressionism of the 1980s. In many ways, Expressionism is one of the most important artistic developments in American history. means to imply, express or refer to a work of art, and to suggest a new, unbroken continuity with the traditional, naturalistic art. means to establish a new, distinct identity, or The Painting is of the style Cubism, characterized by the use of geometric forms and simple shapes for painting. The painting is characterized by a vivid color scheme that fully envelopes the viewer.  The Painting reminds me of Pablo Picasso who came out of the 1940s and 1950s as the world is awakening to modernity. Picasso, in contrast to his old Fauves and Impressionists like Paul Gauguin, used simplified geometric forms to evoke a new world, with geometric forms in a way that was not yet obvious. Rather than looking like classical artists (the French called Picasso while the Americans called Impressionists )</blockquote>
			   		 </div>	
				</div>
			</div>
			</div>
		</div>
</section> 

</div>
