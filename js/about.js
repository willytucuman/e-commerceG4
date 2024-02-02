import Navbar from "./components/Header.js"
import Footer from "./components/Footer.js";



const head = document.getElementsByTagName("head")[0];
const body = document.getElementsByTagName("body")[0];


document.addEventListener("DOMContentLoaded", () => {
  Navbar(); 
  Footer();
});

const main = document.getElementsByTagName("main")[0];
const aboutContent= `
      <div class="divAbout">  
      </div>
			<section id="nosotros" class="container-md align-items-center justify-content-center">
				<article class="row mb-4">
					<div class="col-12">
						<h1 class="text-center title">HardTech-Team</h1>
						<p class="text-center paragraph fst-italic nosotros__text--bg p-4">
							En el corazón de la revolución digital, se encuentra un equipo de
                            desarrolladores web llamados <strong>Devs-Sharks</strong> dedicados y apasionados. Por primera
              				vez, están implementando HTML, CSS y JavaScript, los pilares
							fundamentales de la web, para crear una plataforma de comercio
							electrónico de insumos tecnológicos. <br />Este equipo no es solo
							un grupo de codificadores; son artistas digitales, cada uno
							aportando su propia dosis de creatividad y originalidad al
							proyecto. Cada línea de código que escriben es como un trazo de
							pincel en un lienzo, contribuyendo a una obra maestra en constante
							evolución. Pero más allá de su creatividad, este equipo también
							entiende la importancia de la responsabilidad. Saben que están
							construyendo algo más que una simple página web; están creando una
							experiencia para sus usuarios. Cada decisión que toman, cada
							característica que implementan, está guiada por un compromiso con
							la calidad, la seguridad y la satisfacción del usuario.<br />
							Así que, cuando visites su sitio web, no solo verás una tienda en
							línea de insumos tecnológicos. Verás el resultado de innumerables
							horas de trabajo duro, creatividad y dedicación. Verás la pasión
							de un equipo de desarrolladores web que están haciendo más que
							simplemente escribir código; están dando vida a su visión.
						</p>
					</div>
				</article>
				<article>
					<ul class="row list-unstyled gy-4 d-flex justify-content-evenly align-items-stretch mt-2">
						<li class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch nosotros__card__item"
						>       
							<div class="card fondoCards p-2 text-center border border-dark" style="width: 18rem">
								<div class="nosotros__card__image__container bg-transparent card-img-top">
									<img
										src="../assets/img/about-Jere.png"
										class="nosotros__card__image rounded-circle"
										alt="foto miembro del equipo jeremias"
									/>
								</div>
								<div class="card-body">
									<h5 class="card-title">Jeremias Juarez M.</h5>
									<a href="https://github.com/JeremiasJM" target="_blank" class="btn nosotros__card__btn__social"
										><i class="bi bi-github"></i
									></a>
									</a>
									<a href="https://www.linkedin.com/in/jeremiasjm/" target="_blank" class="btn nosotros__card__btn__social"
										><i class="bi bi-linkedin"></i
									></a>
									<a href="mailto:jeremiasjuarezmarrades15@gmail.com" class="btn nosotros__card__btn__social"
										><i class="bi bi-envelope-at-fill"></i
									></a>
						 		</div>
							</div>
						</li>
                        
						<li
							class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch nosotros__card__item"
						>
							<div class="card fondoCards p-2 text-center border border-dark" style="width: 18rem">
								<div class="nosotros__card__image__container  bg-transparent card-img-top">
									<img
										src="../assets/img/about-Fede.png"
										class="nosotros__card__image bg-transparent rounded-circle"
										alt="foto miembro del equipo fede"
									/>
								</div>
								<div class="card-body">
									<h5 class="card-title">Federico A. Frau Ross</h5>
									<a href="https://github.com/FedericoFrau" target="_blank" class="btn nosotros__card__btn__social"
										><i class="bi bi-github"></i
									></a>
									<a
										href="https://www.linkedin.com/in/federico-antonio-frau-ross-640aa7113"
										target="_blank"
										class="btn nosotros__card__btn__social"
										><i class="bi bi-linkedin"></i
									></a>
									<a href="mailto:fedeafrau@gmail.com" class="btn nosotros__card__btn__social"
										><i class="bi bi-envelope-at-fill"></i
									></a>
								</div>
							</div>
						</li>
						<li
							class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch nosotros__card__item"
						>
							<div class="card fondoCards p-2 text-center border border-dark" style="width: 18rem">
								<div class="nosotros__card__image__container bg-transparent card-img-top">
									<img
										src="../assets/img/about-Facu.png"
										class="nosotros__card__image rounded-circle"
										alt="foto miembro del equipo fACU"
									/>
								</div>
								<div class="card-body">
									<h5 class="card-title">Facundo Giménez</h5>
									<a href="https://github.com/facundoit" target="_blank" class="btn nosotros__card__btn__social"
										><i class="bi bi-github"></i
									></a>
									<a
										href="https://www.linkedin.com/in/facu-gimenez"
										target="_blank"
										class="btn nosotros__card__btn__social"
										><i class="bi bi-linkedin"></i
									></a>
									<a href="mailto:facuie014@gmail.com" class="btn nosotros__card__btn__social"
										><i class="bi bi-envelope-at-fill"></i
									></a>
								</div>
							</div>
						</li>
					</ul>
                    <ul class="row list-unstyled gy-4 justify-content-evenly align-items-stretch mt-3">
                        <li class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 d-flex justify-content-center align-items-stretch nosotros__card__item"
						>    <div class="card fondoCards p-2 text-center border border-dark" style="width: 18rem">
								<div class="nosotros__card__image__container bg-transparent card-img-top">
									<img
										src="../assets/img/about-Tomas.png"
										class="nosotros__card__image bg-transparent"
										alt="foto miembro del equipo tomas"
									/>
								</div>
								<div class="card-body">
									<h5 class="card-title">Tomas Williams</h5>
									<a href="https://github.com/willytucuman" target="_blank" class="btn nosotros__card__btn__social"
										><i class="bi bi-github"></i
									></a>
									<a
										href="https://www.linkedin.com/in/tomas-williams-neme-scheij-b60b8a1bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
										target="_blank"
										class="btn nosotros__card__btn__social"
										><i class="bi bi-linkedin"></i
									></a>
									<a href="mailto:kamurs93@gmail.com" class="btn nosotros__card__btn__social"
										><i class="bi bi-envelope-at-fill"></i
									></a>
								</div>
							</div>
						</li>
						<li
							class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 offset-md-2 offset-lg-0 d-flex justify-content-center align-items-stretch nosotros__card__item"
						>
							<div class="card fondoCards p-2 text-center border border-dark" style="width: 18rem">
								<div class="nosotros__card__image__container bg-transparent card-img-top">
									<img
										src="../assets/img/about-cristian.png"
										class="nosotros__card__image "
										alt="foto miembro del equipo cristian"
									/>
								</div>
								<div class="card-body">
									<h5 class="card-title">Cristián Fernández</h5>
									<a
										href="https://github.com/Fernandez-Cristian-Javier-ISI-UTN-FRT"
										target="_blank"
										class="btn nosotros__card__btn__social"
										><i class="bi bi-github"></i
									></a>
									<a
										href="https://www.facebook.com/cristianjavier.fernandez.58?mibextid=ZbWKwL"
										target="_blank"
										class="btn nosotros__card__btn__social"
										><i class="bi bi-facebook"></i
									></a>
									<a href="mailto:fernandezcristiana.utn@gmail.com" class="btn nosotros__card__btn__social"
										><i class="bi bi-envelope-at-fill"></i
									></a>
								</div>
							</div>
						</li>						
					</ul>
				</article>
			</section>`;

    main.innerHTML=aboutContent;
    main.classList.value = "conteiner-fluid pt-2";
 