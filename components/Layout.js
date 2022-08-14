import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

function Layout({ children, page }) {
  return (
    <>
      <Script
        id="stripe-js"
        src="nav-anim.js"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
      />
      <Script
        id="sticky-js"
        src="navbar-sticky.js"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
      />
      <Script
        id="gsap-js"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
      />
      <Script
        id="anim-js"
        src="anim-text.js"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
      />
      {/* ==================Header section====================== */}
      <header className=" w-full pb-36 bg-header text-white">
        {/* ==================Navbar====================== */}
        <nav className="flex justify-between items-center px-4 ">
          <Link href="/">
            <a>
              <div className="mx-4 my-2 cursor-pointer">
                <Image
                  src={`${process.env.NEXT_PUBLIC_PATH}/logo.png`}
                  alt="Logo"
                  width={150}
                  height={70}
                />
              </div>
            </a>
          </Link>

          <input type="checkbox" id="menu-toggler" className="lg:hidden" />
          <span className="text-4xl lg:hidden" id="menu-bars">
            <i className="las la-bars bars"></i>
            <i className="las la-times close hidden"></i>
          </span>
          <div className="hidden lg:flex menu">
            <a href="#" className="ml-4 text-3xl lg:text-base mb-6 lg:mb-0 ">
              <div className="title">
                <div className="span-container s1">
                  <span>Accueil</span>
                </div>
                <div className="span-container s2">
                  <span>Accueil</span>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="ml-4 text-3xl lg:text-base mb-6 lg:mb-0 relative 
              before:absolute before:w-20 before:h-0 before:bg-red-700 before:left-0 before:bottom-0
              hover:before:h-1
              "
            >
              Collections
            </a>
            <a href="#" className="ml-4 text-3xl lg:text-base mb-6 lg:mb-0">
              A propos
            </a>
            <a href="#" className="ml-4 text-3xl lg:text-base mb-6 lg:mb-0">
              Contacts
            </a>
          </div>
        </nav>
        {/* ==================END Nav bar====================== */}
        <div className="container mx-auto px-4 lg:px-0">
          <div className="mt-24 flex items-center ">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold" id="titre">
                Nous vous offrons le meilleur
              </h1>
              <p className="my-4" id="sous-titre">
                Pour emoustiller vos papilles gustatives
              </p>
              <a href="#" className="bg-yellow-600 btn" id="btn-header">
                Decouverte
              </a>
            </div>
            {/* <div className="hidden lg:flex w-1/2 flex justify-end ">
              <img
                src="/server.svg"
                alt=""
                className="hero__img hidden lg:flex"
              />
            </div> */}
          </div>
        </div>
      </header>
      {/* ==================END Header section====================== */}
      {/* ==================Section service====================== */}
      <section className="bg-gradient-custom py-20">
        <div className="container mx-auto px-4 lg:px-0">
          <h3 className="font-bold text-center text-2xl lg:text-3xl mb-6">
            Pourquoi nous choisir?
          </h3>
          <p className="text-center mb-10">
            Le meilleur est dans vos assiettes.
          </p>

          <div className="card-container">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-front">
                  <p>
                    Vous residez à moins d&apos;un kilomètre d&apos;un parking?
                  </p>
                  <p className="card-price">64 € / Mois</p>
                  <i className="arrow-icon fas fa-arrow-rigth"></i>
                </div>
                <div className="card-back">
                  <a href="" className="btn">
                    Je prends rendez-vous
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="px-4 w-full lg:w-1/3 my-4 lg:my-0">
              <div className="bg-white rounded-xl text-blue-900 flex flex-col items-center py-20 px-10">
                <span className="text-7xl text-yellow-500">
                  <i className="las la-tachometer-alt"></i>
                </span>
                <span className="font-bold text-2xl my-5">Fast Response</span>
                <p className="text-center leading-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nec sagittis dolor. Maecenas quam nunc, tincidunt quis
                  facilisis ut.
                </p>
              </div>
            </div>
            <div className="px-4 w-full lg:w-1/3 my-4 lg:my-0">
              <div className="bg-white rounded-xl text-blue-900 flex flex-col items-center py-20 px-10">
                <span className="text-7xl text-yellow-500">
                  <i className="las la-server"></i>
                </span>
                <span className="font-bold text-2xl my-5">Powerful Server</span>
                <p className="text-center leading-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nec sagittis dolor. Maecenas quam nunc, tincidunt quis
                  facilisis ut.
                </p>
              </div>
            </div>
            <div className="px-4 w-full lg:w-1/3 my-4 lg:my-0">
              <div className="bg-white rounded-xl text-blue-900 flex flex-col items-center py-20 px-10">
                <span className="text-7xl text-yellow-500">
                  <i className="las la-money-bill-wave-alt"></i>
                </span>
                <span className="font-bold text-2xl my-5">Cheap</span>
                <p className="text-center leading-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nec sagittis dolor. Maecenas quam nunc, tincidunt quis
                  facilisis ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================END section service====================== */}

      <section className="bg-slate-100 py-24">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-center font-bold text-2xl lg:text-3xl mb-16">
            More than +3500 Use our services
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4">
              <div className="bg-white my-4 lg:my-0 py-20 px-10 rounded-xl flex flex-col items-center ">
                <img
                  className="rounded-full mb-6"
                  src="/assets/customers/man.svg"
                  alt=""
                />
                <span className="font-bold text-blue-900 text-lg">
                  John Doe
                </span>
                <small className="text-gray-500">Customer</small>
                <p className="text-center leading-10 mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nec sagittis dolor. Maecenas quam nunc, tincidunt quis
                  facilisis ut.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="bg-white my-4 lg:my-0 py-20 px-10 rounded-xl flex flex-col items-center ">
                <img
                  className="rounded-full mb-6"
                  src="/assets/customers/woman1.svg"
                  alt=""
                />
                <span className="font-bold text-blue-900 text-lg">
                  Erica Doe
                </span>
                <small className="text-gray-500">Customer</small>
                <p className="text-center leading-10 mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nec sagittis dolor. Maecenas quam nunc, tincidunt quis
                  facilisis ut.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="bg-white my-4 lg:my-0 py-20 px-10 rounded-xl flex flex-col items-center ">
                <img
                  className="rounded-full mb-6"
                  src="/assets/customers/woman2.svg"
                  alt=""
                />
                <span className="font-bold text-blue-900 text-lg">
                  Jane Doe
                </span>
                <small className="text-gray-500">Customer</small>
                <p className="text-center leading-10 mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nec sagittis dolor. Maecenas quam nunc, tincidunt quis
                  facilisis ut.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap my-10 -mx-4">
            <div className="px-4 w-1/2 lg:w-1/6 my-4 lg:my-0">
              <div className="bg-white rounded-xl px-6 py-4 flex flex-col items-center">
                <img src="/assets/company-logo.svg" alt="" />
                <span className="mt-1">Company Name </span>
              </div>
            </div>
            <div className="px-4 w-1/2 lg:w-1/6 my-4 lg:my-0">
              <div className="bg-white rounded-xl px-6 py-4 flex flex-col items-center">
                <img src="/assets/company-logo.svg" alt="" />
                <span className="mt-1">Company Name </span>
              </div>
            </div>
            <div className="px-4 w-1/2 lg:w-1/6 my-4 lg:my-0">
              <div className="bg-white rounded-xl px-6 py-4 flex flex-col items-center">
                <img src="/assets/company-logo.svg" alt="" />
                <span className="mt-1">Company Name </span>
              </div>
            </div>
            <div className="px-4 w-1/2 lg:w-1/6 my-4 lg:my-0">
              <div className="bg-white rounded-xl px-6 py-4 flex flex-col items-center">
                <img src="/assets/company-logo.svg" alt="" />
                <span className="mt-1">Company Name </span>
              </div>
            </div>
            <div className="px-4 w-1/2 lg:w-1/6 my-4 lg:my-0">
              <div className="bg-white rounded-xl px-6 py-4 flex flex-col items-center">
                <img src="/assets/company-logo.svg" alt="" />
                <span className="mt-1">Company Name </span>
              </div>
            </div>
            <div className="px-4 w-1/2 lg:w-1/6 my-4 lg:my-0">
              <div className="bg-white rounded-xl px-6 py-4 flex flex-col items-center">
                <img src="/assets/company-logo.svg" alt="" />
                <span className="mt-1">Company Name </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex items-center flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 ox-6 lg:px-14 py-10">
              <span className="text-center text-2xl lg:text-3xl font-bold inline-flex w-full justify-center">
                Level Up your web hosting with these must-have.
              </span>
            </div>
            <div className="w-full lg:w-1/2 px-6 lg:px-14 py-10 flex flex-col md:flex-row items-center">
              <div className="md:mr-10">
                <span className="text-8xl text-yellow-500 mb-6 md:mb-0 inline-block">
                  <i className="las la-cog"></i>
                </span>
              </div>
              <div>
                <span className="font-bold text-lg">Data Safety </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nec sagittis dolor.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-6 lg:px-14 py-10 flex flex-col md:flex-row items-center">
              <div className="md:mr-10">
                <span className="text-8xl text-yellow-500 mb-6 md:mb-0 inline-block">
                  <i className="las la-shield-alt"></i>
                </span>
              </div>
              <div>
                <span className="font-bold text-lg">Security</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nec sagittis dolor.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-6 lg:px-14 py-10 flex flex-col md:flex-row items-center">
              <div className="md:mr-10">
                <span className="text-8xl text-yellow-500 mb-6 md:mb-0 inline-block">
                  <i className="las la-tools"></i>
                </span>
              </div>
              <div>
                <span className="font-bold text-lg">SEO Tools</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nec sagittis dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-custom">
        <div className="container mx-auto px-4 lg:px-0">
          <h3 className="text-center text-2xl lg:text-3xl font-bold mb-6">
            So what&apos;s in Shared Hosting? A whole lot.
          </h3>
          <div className="flex flex-wrap items-center">
            <div
              className="w-full lg:w-1/3 bg-white text-blue-900 rounded-tl-xl rounded-tr-xl lg:rounded-tr-none rounded-bl-none lg:rounded-bl-xl pricing-card
            flex flex-col items-center justify-around py-10
          "
            >
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">Starter Package</span>
                <span>Blogging Website</span>
              </div>
              <span className="text-3xl font-bold">$3 / month</span>
              <a href="#" className="btn border border-blue-900">
                Buy now
              </a>
            </div>
            <div
              className="w-full lg:w-1/3 bg-yellow-600 pricing-card-main
            flex flex-col items-center justify-around py-10
            flex-wrap
          "
            >
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">Starter Package</span>
                <span>Blogging Website</span>
              </div>
              <span className="text-3xl font-bold">$3 / month</span>
              <a href="#" className="btn border border-white">
                Buy now
              </a>
            </div>
            <div
              className="w-full lg:w-1/3 bg-white text-blue-900 
            lg:rounded-tr-xl rounded-br-xl 
            rounded-tr-none rounded-bl-xl lg:rounded-bl-none
            pricing-card
            flex flex-col items-center justify-around py-10
          "
            >
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">Starter Package</span>
                <span>Blogging Website</span>
              </div>
              <span className="text-3xl font-bold">$3 / month</span>
              <a href="#" className="btn border border-blue-900">
                Buy now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-0">
          <h3 className="font-bold text-center text-2xl lg:text-3xl mb-6">
            Hosting from Another world
          </h3>
          <p className="w-full lg:w-1/2 mx-auto text-center text-lg mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            sagittis dolor. Maecenas quam nunc, tincidunt quis facilisis ut,
            faucibus eget{" "}
          </p>
          <div className="flex flex-wrap items-start lg:items-center ">
            <div className="px-0 lg:px-10 w-full lg:w-1/3 flex justify-start lg:justify-center">
              <ul>
                <li className="text-2xl mb-4">
                  <i className="las la-check-circle text-blue-500"></i>
                  <span>Website Builder</span>
                </li>
                <li className="text-2xl mb-4">
                  <i className="las la-check-circle text-blue-500"></i>
                  <span>WP Accelerator</span>
                </li>
                <li className="text-2xl mb-4">
                  <i className="las la-check-circle text-blue-500"></i>
                  <span> 24/7 Support </span>
                </li>
              </ul>
            </div>
            <div className="px-0 lg:px-10 w-full lg:w-1/3 flex justify-start lg:justify-center">
              <ul>
                <li className="text-2xl mb-4">
                  <i className="las la-check-circle text-blue-500"></i>
                  <span>Free Domain and SSL </span>
                </li>
                <li className="text-2xl mb-4">
                  <i className="las la-check-circle text-blue-500"></i>
                  <span>Auto Installer</span>
                </li>
                <li className="text-2xl">
                  <i className="las la-check-circle text-blue-500"></i>
                  <span> DDoS and Malware </span>
                </li>
              </ul>
            </div>
            <div className="px-10 w-1/3 justify-center hidden lg:flex">
              <img src="/assets/data-host.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-gray-400">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-wrap -mx-4">
            <div className="pl-0 lg:pl-4 w-full lg:w-1/3">
              <a className="mb-10 inline-flex">
                <img src="/assets/logo.svg" alt="Logo" />
              </a>
              <p className="leading-10 mb-5">
                I am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper matti pibus leo.
              </p>
              <div>
                <a href="#">
                  <i className="lab la-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="lab la-twitter"></i>
                </a>
                <a href="#">
                  <i className="lab la-pinterest"></i>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-wrap mt-10 lg:mt-0 pl-0 lg:pl-16 pr-4">
              <div className="w-full lg:w-1/3">
                <span className="font-bold text-lg text-white mb-7 inline-block">
                  Get Started{" "}
                </span>
                <ul>
                  <li className="mb-7">
                    <a href="#">Tutorials</a>
                  </li>
                  <li className="mb-7">
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Guides</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/3">
                <span className="font-bold text-lg text-white mb-7 inline-block">
                  Get Started{" "}
                </span>
                <ul>
                  <li className="mb-7">
                    <a href="#">Tutorials</a>
                  </li>
                  <li className="mb-7">
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Guides</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/3">
                <span className="font-bold text-lg text-white mb-7 inline-block">
                  Get Started{" "}
                </span>
                <ul>
                  <li className="mb-7">
                    <a href="#">Tutorials</a>
                  </li>
                  <li className="mb-7">
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Guides</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-10">
            <span>&copy; All rights reserved</span>
            <span>Made with love by Ridho Tijan</span>
          </div>
        </div>
      </footer>
      <main>{children}</main>
    </>
  );
}

export default Layout;
