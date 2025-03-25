import React from "react";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <section>
      <h2>Wie ben ik?</h2>
      <p>
        Ik ben Jelle de Jong, uit{" "}
        <a
          href="https://nl.wikipedia.org/wiki/Soest_(Nederland)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soest
        </a>
        . Geboren in{" "}
        <a
          href="https://nl.wikipedia.org/wiki/1979"
          target="_blank"
          rel="noopener noreferrer"
        >
          1979
        </a>
        . Ik leef samen met mijn heerlijke gezin, waarvan ik volop geniet van
        mijn allerliefst Suzanne en mijn twee dochters Mette en Keet.
      </p>
      <h2>Wat doe ik?</h2>
      <p>
        Mijn werk is mijn passie! Sinds de jaren '90 houd ik me al bezig met
        web-development. In het begin voornamelijk kleine sites voor het MKB in{" "}
        <a href="https://www.php.net" target="_blank" rel="noopener noreferrer">
          PHP
        </a>{" "}
        en{" "}
        <a
          href="https://www.mysql.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          MySQL
        </a>
        . Dit verruilde zich later voor grote webomgevingen ontwikkelt op het
        <a
          href="https://dotnet.microsoft.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          .NET platform
        </a>{" "}
        (voornamelijk C#) met een{" "}
        <a
          href="https://http://www.microsoft.com/sql-server"
          target="_blank"
          rel="noopener noreferrer"
        >
          MS Sql Server
        </a>
        , gecombineerd met diverse frontend technologiën.
      </p>
      <p>
        Bij mijn vorige werkgever,{" "}
        <a
          href="https://www.infoprojects.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          InfoProjects BV
        </a>{" "}
        uit Bussum, heb ik veel ervaring opgedaan met web-development. Na mijn
        HBO studie Hogere Informatica (afgerond in juni 2003), ben ik daar
        gestart als junior web-developer en heb me de afgelopen jaren ontwikkeld
        tot de technisch verantwoordelijke, senior developer voor diverse
        web-projecten. Daar werkte ik voornamelijk met Microsoft technologieën
        (C# en Sql Server), (X)HTML, JavaScipt, CSS, XML en XSLT.
      </p>
      <p>
        In mijn vrije tijd ben ik regelmatig bezig met mijn vak, kennis opdoen
        in andere programmeertalen of er over lezen. Zo heb ik bij de geboorte
        van mijn eerste dochter een Online Dagboek site opgezet in{" "}
        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Python
        </a>{" "}
        (Flask) i.c.m.{" "}
        <a
          href="https://www.postgresql.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PostgreSQL
        </a>
        , met op het moment van schrijven ruim 2000 gebruikers.
      </p>
      <p>
        Naast de ".NET en Python-wereld" trekt ook de wereld van{" "}
        <a
          href="https://www.nodejs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node JS
        </a>
        . Om zowel frontend- als backendtaken op te lossen met eenzelfde
        programmeertaal vind ik een mooi principe.
      </p>
      <p>
        Mijn werkgever na InfoProjects was{" "}
        <a
          href="https://www.ster.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ster (Stichting Etherreclame)
        </a>
        , hier ben ik sinds begin 2015 actief als senior webdeveloper en
        binnengehaald voor het technisch begeleiden en implementeren van een CMS
        met een bijbehorende corporate website, ontworpen door een designbureau.
        Alles is gebaseerd op .NET technologie (C#, Razor en het Umbraco CMS) in
        een Azure omgeving.
      </p>
      <p>
        Daarnaast heb ik een traject opgezet om continuous integration en
        deployment in gebruik te nemen op basis van de applicaties{" "}
        <a
          href="https://www.jetbrains.com/teamcity/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TeamCity
        </a>{" "}
        en{" "}
        <a
          href="https://octopus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Octopus
        </a>
        .
      </p>
      <p>
        Ook heb ik de opzet van het{" "}
        <a
          href="https://portal.ster.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ster Klantportaal
        </a>{" "}
        opgestart met gebruik van Web API's en een{" "}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React JS
        </a>{" "}
        frontend.
      </p>
      <p>
        Vanaf juni 2016 was ik actief als lid van het managementteam van{" "}
        <a
          href="https://www.twijg-it.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twijg IT
        </a>
        , samen met mijn collega's waren we verantwoordelijk voor de bouw van
        allerlei soorten webapplicaties. Technieken die hier voornamelijk een
        rol spelen zijn React JS en C# Web API's.
      </p>
      <p>Per juni 2023 ben ik weer terug bij <a
          href="https://www.ster.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ster (Stichting Etherreclame)
        </a>. Daar draai ik mee als technisch verantwoordelijke bij de bouw van diverse IT-projecten.</p>
    </section>

    <section>
      <h2>Contact opnemen?</h2>
      <p>
        Wilt je contact opnemen of heb je vragen? Je kunt mij gerust even een{" "}
        <a href="mailto:jelle@hoest.nl?Subject=Mail%20via%20jelledejong.org">
          mail
        </a>{" "}
        sturen.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
