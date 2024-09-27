CREATE TABLE ad (
id INTEGER PRIMARY KEY,
title TEXT,
description TEXT,
owner TEXT,
price INTEGER,
picture TEXT,
location TEXT,
createdAt DATE,
category_id INTEGER,
FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE category (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

INSERT INTO category (name) VALUES
('Véhicules'),
('Vêtements'),
('Autre');


INSERT INTO ad (title, description, owner, price, picture, location, createdAt, category_id) VALUES
('Vélo électrique neuf', 'Vélo électrique urbain, autonomie de 60 km, parfait pour se déplacer en ville.', 'mario69', 1200, 'https://example.com/velo.jpg', 'Lyon', '2024-09-15', 1),
('Appartement T2 en centre-ville', 'T2 de 50m², meublé, au cœur de Lyon, proche du métro et des commerces.', 'claire33', 800, 'https://example.com/appart_lyon.jpg', 'Lyon', '2024-09-13', 3),
('Cours de yoga en plein air', 'Cours de yoga pour tous les niveaux au parc de la Tête d’Or, détente et relaxation garanties.', 'lucie69', 200, 'https://example.com/yoga.jpg', 'Lyon', '2024-09-12', 3),
('MacBook Pro 2020', 'MacBook Pro 13 pouces, 256 Go, parfait état, vendu avec sa boîte d’origine.', 'paul69', 1000, 'https://example.com/macbook.jpg', 'Lyon', '2024-09-19', 3),
('Stage de cuisine lyonnaise', 'Apprenez à cuisiner les spécialités lyonnaises avec un chef renommé.', 'marie69', 100, 'https://example.com/cuisine.jpg', 'Lyon', '2024-09-14', 3),
('Jardinier à domicile', 'Service de jardinage et d’entretien des espaces verts, devis gratuit.', 'alain69', 250, 'https://example.com/jardinier.jpg', 'Lyon', '2024-09-21', 3),
('Scooter 125cc', 'Scooter 125cc, très bon état, 5000 km, révisé récemment.', 'julien33', 1800, 'https://example.com/scooter.jpg', 'Lyon', '2024-09-10', 1),
('Table de ping-pong extérieure', 'Table de ping-pong d’extérieur en excellent état, résistante aux intempéries.', 'arnaud69', 350, 'https://example.com/pingpong.jpg', 'Lyon', '2024-09-18', 3),
('Cours de maths niveau lycée', 'Cours particuliers de maths pour élèves de lycée, expérience de 5 ans.', 'elise69', 300, 'https://example.com/maths.jpg', 'Lyon', '2024-09-20', 3),
('Chambre à louer chez l’habitant', 'Chambre meublée à louer chez l’habitant, accès cuisine et salle de bain partagés.', 'jean69', 400, 'https://example.com/chambre.jpg', 'Lyon', '2024-09-16', 3),
('Cave à vin réfrigérée', 'Cave à vin 50 bouteilles, température réglable, idéale pour les amateurs de vin.', 'anne33', 450, 'https://example.com/caveavin.jpg', 'Bordeaux', '2024-09-11', 3),
('Maison de campagne', 'Charmante maison de campagne de 120m² avec jardin, à 30 minutes de Bordeaux.', 'pierre33', 1500, 'https://example.com/maison.jpg', 'Bordeaux', '2024-09-17', 3),
('Cours de surf', 'Cours de surf pour débutants sur la côte atlantique, matériel fourni.', 'leo33', 500, 'https://example.com/surf.jpg', 'Bordeaux', '2024-09-22', 3),
('Table en bois massif', 'Grande table en chêne massif, 8 places, parfaite pour les repas en famille.', 'manon33', 600, 'https://example.com/table.jpg', 'Bordeaux', '2024-09-20', 3),
('Concert de jazz', 'Billets pour le concert de jazz au théâtre Fémina, places en catégorie 1.', 'lucas33', 800, 'https://example.com/concert.jpg', 'Bordeaux', '2024-09-15', 3),
('Piano numérique Yamaha', 'Piano numérique Yamaha P-45, parfait état, idéal pour débutants.', 'julie33', 350, 'https://example.com/piano.jpg', 'Bordeaux', '2024-09-10', 3),
('Cours d’oenologie', 'Découvrez les secrets du vin lors d’un cours d’oenologie avec un sommelier.', 'marc33', 600, 'https://example.com/oenologie.jpg', 'Bordeaux', '2024-09-19', 3),
('Renovation de meubles anciens', 'Service de rénovation et de relooking de meubles anciens, devis gratuit.', 'sarah33', 200, 'https://example.com/meubles.jpg', 'Bordeaux', '2024-09-13', 3),
('Billets de match', 'Billets pour le match de football Bordeaux - Marseille, tribune centrale.', 'nicolas33', 900, 'https://example.com/match.jpg', 'Bordeaux', '2024-09-18', 3),
('Canapé d’angle en cuir', 'Canapé d’angle en cuir noir, très bon état, dimensions 3x2 mètres.', 'olivier33', 700, 'https://example.com/canape.jpg', 'Bordeaux', '2024-09-21', 3),
('Studio meublé à louer', 'Studio de 20m², meublé, au cœur du Marais, idéal pour étudiant ou jeune actif.', 'pauline75', 1100, 'https://example.com/studio.jpg', 'Paris', '2024-09-14', 3),
('Billets pour Disneyland', 'Deux billets adultes pour Disneyland Paris, valables jusqu’à la fin de l’année.', 'remi75', 150, 'https://example.com/disneyland.jpg', 'Paris', '2024-09-16', 3),
('Appareil photo Sony Alpha 7 III', 'Sony Alpha 7 III avec objectif 28-70mm, très bon état, utilisé 1 an.', 'elena75', 1200, 'https://example.com/sony.jpg', 'Paris', '2024-09-12', 3),
('Cours de français pour étrangers', 'Cours de français tous niveaux pour étrangers, méthode dynamique et personnalisée.', 'philippe75', 400, 'https://example.com/francais.jpg', 'Paris', '2024-09-17', 3),
('Vélo pliant Brompton', 'Vélo pliant Brompton, très léger, parfait pour les trajets en ville.', 'nathalie75', 850, 'https://example.com/velo_pliant.jpg', 'Paris', '2024-09-11', 1),
('Montre connectée Apple Watch', 'Apple Watch Series 7, avec bracelet sport, très peu utilisée.', 'antoine75', 300, 'https://example.com/applewatch.jpg', 'Paris', '2024-09-10', 3),
('Spectacle au Moulin Rouge', 'Deux billets pour le spectacle au Moulin Rouge, incluant dîner et boissons.', 'sophie75', 400, 'https://example.com/moulinrouge.jpg', 'Paris', '2024-09-15', 3),
('Cours de photographie', 'Atelier de photographie pour débutants, apprenez à maîtriser votre appareil.', 'martin75', 700, 'https://example.com/photographie.jpg', 'Paris', '2024-09-21', 3),
('Tableau de peinture abstraite', 'Peinture abstraite sur toile, 100x100 cm, signée par l’artiste local.', 'alice75', 500, 'https://example.com/tableau.jpg', 'Paris', '2024-09-20', 3),
('Location de vélo électrique', 'Location de vélo électrique pour une journée à Paris, idéal pour découvrir la ville.', 'alexandre75', 300, 'https://example.com/location_velo.jpg', 'Paris', '2024-09-22', 1);

SELECT * FROM ad;

SELECT * FROM ad 
WHERE location = 'Bordeaux';

DELETE FROM category
WHERE price > 40;

UPDATE category
SET price = 0
WHERE createdAt = '2024-09-01'

SELECT AVG(price) FROM ad
WHERE location = 'Paris';

SELECT location, AVG(price) FROM ad
GROUP BY location;

SELECT * from ad
INNER JOIN category ON ad.category_id = category.id
WHERE category_id = 2;

SELECT * from ad
JOIN category ON ad.category_id = category.id
WHERE category.name IN  ('Véhicules', 'Vêtements');

SELECT AVG(price) from ad
INNER JOIN category ON ad.category_id = category.id
WHERE category.id = 3;

SELECT * from ad
INNER JOIN category ON ad.category_id = category.id
where category.name LIKE 'V%';

DELETE FROM ad
WHERE id=32;