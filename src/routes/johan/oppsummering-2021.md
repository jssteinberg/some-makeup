---
lang: nb
title: Oppsummering 2021
date: ['2021-12-29']
layout: read
---

# Oppsummering 2021

**Ny jobb**
- Jeg startet å jobbe med Utdanning.no i august, med nye, gode kolleger i Direktoratet for høyere utdanning og kompetanse!
- Jeg er særlig fornøyd med å bli tatt godt i mot og se at kompetansen min blir satt pris på.
- Jeg ser spesielt frem til å bidra mer med frontend på Utdanning.no i det kommende året.

**Lære React**
- Jeg startet å lære Javascript-rammeverket React i det som er en (foreløpig) halvferdig React-app for et nytt Utdanningssystemet, som er en visualisering av det norske utdanningssystemet.
- Jeg tok et 4-dagers kurs om React, Redux og routing via Glasspaper.

**Utvikle designsystem**
- Jeg var på prosjektet for nytt designsystem for Utdanning.no.
- Jeg måtte sette meg inn i *monorepo* og sette opp et monorepo for utvikling av designsystemet.
- Jeg utviklet grunn CSS-en for normalisering og typografi (basert på mitt eget bibliotek [Floor Typography CSS](//floortypography.vercel.app), oppdatert for 2022).
- Jeg var/er utviklerkontakt for de eksterne utviklerne.

**Design & frontend**
- Jeg har rådgitt innen design og frontend på forskjellige prosjekter (UU, SEO, Dimensjonering, Yrkesbeskrivelser, Arbeidsmarkedskart).

**Startet produksjon**
- Jeg har kommet i gang med koding i React, og noe relatert til Drupal 9. Noen UU-fikser er i prod. og flere skal rulles ut.

---

**Jeg avsluttet** min reise i e-helse hos min tidligere arbeidsgiver Universitetssykehuset Nord-Norge
- Året startet med at jeg ferdigstilte [Flyktning.net](https://flyktning.net/) for RVTS med Javascript-rammeverket Svelte.
- Jeg overførte arbeid og oppgaver før avslutning i en stilling jeg vokste mye i; som ga meg mye ansvar, frihet og muligheter, og; som jeg trivdes veldig godt i.

<AccentHue hue="29.7" />

<script>
	import AccentHue from '../../libs/AccentHue.svelte';
</script>

<style>
	ul {
		list-style: inside square;
		padding: 0;
	}

	li {
		display: inline list-item;
	}

	p, p + ul {
		display: inline;
	}

	p + ul::after {
		content: '';
		display: block;
		margin: var(--spacer, 1rem) 0;
	}

	li, p {
		padding-inline-end: .5ch;
	}

	p strong {
		font-weight: normal;
		font-variant: small-caps;
	}
</style>
