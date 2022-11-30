export {content1}

function content1(){
    let str = `
    <h3>OFFICIAL ALBUM</h3>
			<p>On July 31, World renowned girl-group BLACKPINK released their 2nd album [BORN PINK].</p>
			<ul class="albumList">
				<li class="contlist active">
					<ul>
						<li>
							<img src="./images/about/bornpink_album.jpg" alt="bornpink album">
						</li>
						<li>
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<dl>
								<dt>BORN PINK</dt>
								<dd>
									<p>
										On July 31, World renowned girl-group BLACKPINK released their 2nd album [BORN PINK]. BLACKPINK made listeners addicted to their pre-release single ‘Pink Venom’ back in August, and now plans to take over the world with their 2nd album [BORN PINK].
									</p>
								</dd>
							</dl>
						</li>
					</ul>
				</li>
				<li class="contlist">
					<ul>
						<li>
							<img src="./images/about/pinkvenom_album.jpg" alt="">
						</li>
						<li>
							<ul>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<dl>
								<dt>PINK VENOM</dt>
								<dd>
									<p>
										On July 31, World renowned girl-group BLACKPINK released their 2nd album [BORN PINK]. BLACKPINK made listeners addicted to their pre-release single ‘Pink Venom’ back in August, and now plans to take over the world with their 2nd album [BORN PINK].
									</p>
								</dd>
							</dl>
						</li>
					</ul>
				</li>
			</ul>
			<ul class="tabBtn">
				<li class="active"><a href="#">BornPink</a></li>
				<li><a href="#">PinkVenom</a></li>
			</ul>
			
			<section class="aboutPinkVenom">
				<h4>Pink Venom</h4>
				<p>
					Blackpink’s new single, “Pink Venom,” Jennie opens the first verse with “Kick in the door, waving the coco,” a play on the Notorious B.I.G.’s “Kick in the door, wavin’ the .44” lyric. As the percussion ratchets up, Jisoo and Rosé share a pre-chorus with the beguiling “Look what you made us do.” Then, the song breaks down into a sparse, beat-down chorus in the style of Taylor Swift’s “Look What You Made Me Do.” The record is a maximalist homage to classic hip-hop and pop that intensifies the recent trend of intense sampling and interpolation.
				</p>
				<ul class="lyrics">
					<li>
						<ul>
							<li class="original">
								<strong>Kick in the Door <br> Waving the four-four</strong>
							</li>
							<li class="bpMix">
								<dl>
									<dt>NOTORIOUS B.I.G - KICK IN THE DOOR</dt>
									<dd><img src="./images/about/kick2.jpg" alt=""></dd>
									<dd>Jennie sings “Kick in the door, waving the co-co” which is also a song by 
										Notorious B.I.G. THE ORIGINAL LYRICS "KICK IN THE DOOR, WAVING THE FOUR-FOUR" </dd>
								</dl>
							</li>
						</ul>
					</li>
					<li>
						<ul>
							<li class="original">
								<strong>Look <br> What you made me do</strong>
							</li>
							<li class="bpMix">
								<dl>
									<dt>TAYLOR - LOOK WHAT YOU MADE ME DO</dt>
									<dd><img src="./images/about/what2.jpg" alt=""></dd>
									<dd>Rose &amp; Jisoo sings “look what you made us do” which is also a song by 
										Taylor Swift. THE ORIGINAL LYRICS IS "LOOK WHAT YOU MADE ME DO" </dd>
								</dl>
							</li>
						</ul>
					</li>
					<li>
						<ul>
							<li class="original">
								<strong>Like a vandal <br> Like a candle</strong>
							</li>
							<li class="bpMix">
								<dl>
									<dt>VALILLA ICE - ICE ICE BABY</dt>
									<dd><img src="./images/about/candle2.jpg" alt=""></dd>
									<dd>Rose &amp; Jisoo sings “look what you made us do” which is also a song by 
										Taylor Swift. THE ORIGINAL LYRICS IS "I ROCK A MIC LIKE A VANDAL, LIGHT UP LIKE A CANDLE" </dd>
								</dl>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<section class="aboutSD">
				<h4>Shut Down</h4>
				<p>Another important hint was revealed regarding its general sound. "Shut Down" will apparently give a big nod to an iconic figure in the world of classical music: Niccolò Paganini (1782-1840). BLACKPINK’s producers, Teddy and 24, sampled his famous piece “La Campanella.”</p>
				<div class="sdPlayBox">
					<p>The song is a sampling of Paganini's 'La Campanella' through which it maximizes the dark and mysterious aura the original song embodies - from yg</p>
					<ul class="sdPlay">
						<li>
							<div class="image"><img src="./images/about/paganini1.jpg" alt=""></div>
							<dl>
								<dt>La Campanella</dt>
								<dd>Paganini</dd>
								<dd class="playBtn"><span class="hidden">play</span><i class="fa-solid fa-play"></i></dd>
								<!-- <dd><span class="hidden">stop</span><i class="stopBtn fa-solid fa-pause"></i></dd> -->
							</dl>
						</li>
						<li>
							<div class="image"><img src="./images/about/paganini2.jpg" alt=""></div>
							<dl>
								<dt>Shut Down</dt>
								<dd>BlackPink</dd>
								<dd class="playBtn"><span class="hidden">play</span><i class="fa-solid fa-play"></i></dd>
								<!-- <dd><span class="hidden">stop</span><i class="stopBtn fa-solid fa-pause"></i></dd> -->
							</dl>
						</li>
					</ul>
				</div>
			</section>`;
    document.querySelector('.aboutAlbum').innerHTML = str;
}
