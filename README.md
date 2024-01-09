#  Projet Web


## Table des matières

- [Introduction](#introduction)
- [Mise en route](#mise-en-route)
- [Prérequis](#prérequis)
- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Choix d'Architecture/Conception](#choix-darchitectureconception)

## Introduction

Ce projet a pour but de nous apprendre les techniques et habitudes de base de la programmation web. Le site permet la gestion d’utilisateurs et d’association ainsi que leurs différents attributs.

## Mise en route

Pour lancer le projet web il faut ouvrir deux terminaux, se placer dans le Back-end et lancer la commande “npm run start” et dans le Front-end et lancer la commande “ng serve –open”. Cela lancera le back-end en local sur le port 3000 et le front-end sur le port 4200 et une fenêtre s’ouvrira dans le navigateur pour le front-end après avoir lancé la commande pour pouvoir utiliser ensuite notre application web.

## Prérequis

Il faut avoir node et nest pour pouvoir faire fonctionner le Back-end et Angular pour faire fonctionner le Front-end.

## Fonctionnalités

Afin d’avoir accéder à notre site, il faut connaître un identifiant et le mot de passe d’un utilisateur.La page de connexion redirige ensuite sur la page de la liste des users. on a maintenant une barre de navigation toujours présente en haut de la page avec un bouton pour se déconnecter et des bouton pour aller à la liste des user et des associations (et pour finir un bouton pour ajouter un utilisateur , problème de git : fonctionnalité faite mais pas présente sur le git) pour chaqu’une des listes, on peut cliquer sur l’identifiant des différentes instance afficher pour obtenir son details et l’on a au dessus de la liste une barre de recherche qui si un id correct est entré renvoie sur les détails de l’instance de user ou d’association correspondante. Le bouton add user renvoie sur un form ou l’on rentre les informations de nouvelle user à créer.

## Technologies Utilisées

L’intégralité du projet (Back et Front) a été programmé en TypeScript et Html.Pour le Front-End nous avons pu nous appuyer sur le framework Angular.

## Choix d'Architecture/Conception

La structure du back-end et du front-end suit le processus demandé par le TP.
Par soucis de simplicité nous avons d’abord choisi de regrouper les boutons de fonctionnalité dans la barre de navigation qui sera toujours présente un haut de la page après connexion pour assurer la navigation, mais nous avons manqué de temps pour modifier cela et pour améliorer l'esthétique globale du site.   






