
Fonctionnalités

Utilise Express comme framework d'application.
Communication en temps réel entre un client et un serveur à l'aide de Socket.io.
Utilise MongoDB, Mongoose pour stocker des messages et interroger des données.
Utilise le service Web RESTful pour servir différentes plates-formes, 

Installation

Exécution en locale

Assurez-vous que Node.js et npm sont installés.

Cloner ou télécharger le projet

git https://github.com/jethron22/APP-MESSAGERIE-AND-CHAT-FOR-ENTERPRISES/master
$ cd messagerie

Installer les dépendances

installation npm
MongoDB démarre en cas de besoin

Démarrer l'application

Point d'entrée server.js
 
L'application s'exécute à partir de localhost : 2707.

Comment ça fonctionne
Une base de données appelée "chat_db" nommée est créée via le code. Les informations sur le surnom, le msg et le groupe sont également conservées dans la table nommée Messages.

D'utilisateur à utilisateur, sous forme de diffusion de publication ou de groupe dans la messagerie de la salle. Messagerie d'utilisateur à utilisateur :

messagetexte du nom d'utilisateur
le message est envoyé comme.
Prises
Avoir une connexion active ouverte entre le client et le serveur afin que le client puisse envoyer et recevoir des données. Cela permet une communication en temps réel à l'aide de sockets TCP. Ceci est rendu possible par Socket.io.

Le client commence par se connecter au serveur. Une fois les connexions réussies, le client et le serveur peuvent émettre et écouter des événements.

RestFUL

À l'aide de requêtes HTTP, nous pouvons utiliser l'action respective pour déclencher chacune de ces quatre opérations CRUD.
POST est utilisé pour envoyer des données à un serveur  : Créer
GET est utilisé pour récupérer les données d'un serveur  : Lire
PUT est utilisé pour envoyer et mettre à jour des données  : Mettre à jour
DELETE est utilisé pour supprimer des données — Supprimer.
