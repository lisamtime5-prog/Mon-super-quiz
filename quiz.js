// =========================================================================
// DONNÉES DU QUIZ (CONTENU FINAL ET ÉTENDU)
// =========================================================================

const QUIZ_DATA = {
    mathematiques: {
        titre: "Mathématiques",
        modes: [
            { type: "Calcul Mental", couleur: "#4CAF50", questions: [
                { enonce: "47 + 32 = ?", reponseCorrecte: "79", type: "Saisie" },
                { enonce: "105 + 95 = ?", reponseCorrecte: "200", type: "Saisie" },
                { enonce: "14 + 81 = ?", reponseCorrecte: "95", type: "Saisie" },
                { enonce: "300 + 175 = ?", reponseCorrecte: "475", type: "Saisie" },
                { enonce: "55 + 13 = ?", reponseCorrecte: "68", type: "Saisie" },
                { enonce: "123 + 456 = ?", reponseCorrecte: "579", type: "Saisie" },
                { enonce: "99 + 1 = ?", reponseCorrecte: "100", type: "Saisie" },
                { enonce: "25 + 75 = ?", reponseCorrecte: "100", type: "Saisie" },
                { enonce: "18 + 19 = ?", reponseCorrecte: "37", type: "Saisie" },
                { enonce: "400 + 600 = ?", reponseCorrecte: "1000", type: "Saisie" },
                { enonce: "85 - 23 = ?", reponseCorrecte: "62", type: "Saisie" },
                { enonce: "200 - 150 = ?", reponseCorrecte: "50", type: "Saisie" },
                { enonce: "99 - 44 = ?", reponseCorrecte: "55", type: "Saisie" },
                { enonce: "50 - 17 = ?", reponseCorrecte: "33", type: "Saisie" },
                { enonce: "1000 - 350 = ?", reponseCorrecte: "650", type: "Saisie" },
                { enonce: "45 - 9 = ?", reponseCorrecte: "36", type: "Saisie" },
                { enonce: "78 - 50 = ?", reponseCorrecte: "28", type: "Saisie" },
                { enonce: "31 - 16 = ?", reponseCorrecte: "15", type: "Saisie" },
                { enonce: "120 - 40 = ?", reponseCorrecte: "80", type: "Saisie" },
                { enonce: "63 - 18 = ?", reponseCorrecte: "45", type: "Saisie" },
                { enonce: "9 x 8 = ?", reponseCorrecte: "72", type: "Saisie" },
                { enonce: "12 x 5 = ?", reponseCorrecte: "60", type: "Saisie" },
                { enonce: "7 x 7 = ?", reponseCorrecte: "49", type: "Saisie" },
                { enonce: "11 x 11 = ?", reponseCorrecte: "121", type: "Saisie" },
                { enonce: "6 x 9 = ?", reponseCorrecte: "54", type: "Saisie" },
                { enonce: "13 x 2 = ?", reponseCorrecte: "26", type: "Saisie" },
                { enonce: "5 x 15 = ?", reponseCorrecte: "75", type: "Saisie" },
                { enonce: "4 x 12 = ?", reponseCorrecte: "48", type: "Saisie" },
                { enonce: "8 x 8 = ?", reponseCorrecte: "64", type: "Saisie" },
                { enonce: "3 x 10 = ?", reponseCorrecte: "30", type: "Saisie" },
                { enonce: "6 x 6 = ?", reponseCorrecte: "36", type: "Saisie" },
                { enonce: "25 + 26 = ?", reponseCorrecte: "51", type: "Saisie" },
                { enonce: "50 + 50 + 50 = ?", reponseCorrecte: "150", type: "Saisie" },
                { enonce: "100 - 1 = ?", reponseCorrecte: "99", type: "Saisie" },
                { enonce: "20 x 5 = ?", reponseCorrecte: "100", type: "Saisie" },
                { enonce: "Moitié de 50 ?", reponseCorrecte: "25", type: "Saisie" },
                { enonce: "Double de 15 ?", reponseCorrecte: "30", type: "Saisie" },
                { enonce: "150 + 150 = ?", reponseCorrecte: "300", type: "Saisie" },
                { enonce: "1000 - 100 = ?", reponseCorrecte: "900", type: "Saisie" },
                { enonce: "3 x 30 = ?", reponseCorrecte: "90", type: "Saisie" }
            ]},
        ]
    },
    francais: {
        titre: "Français",
        modes: [
            { type: "Nature des mots", couleur: "#E91E63", questions: [
                { enonce: "Nature de 'rapidement' ?", options: ["Adverbe", "Nom", "Adjectif"], reponseCorrecte: "Adverbe" },
                { enonce: "Nature de 'maison' ?", options: ["Nom", "Verbe"], reponseCorrecte: "Nom" },
                { enonce: "Nature de 'manger' ?", options: ["Verbe", "Nom"], reponseCorrecte: "Verbe" },
                { enonce: "Nature de 'beau' ?", options: ["Adjectif", "Nom"], reponseCorrecte: "Adjectif" },
                { enonce: "Nature de 'et' ?", options: ["Conjonction", "Préposition"], reponseCorrecte: "Conjonction" },
                { enonce: "Nature de 'le' ?", options: ["Déterminant", "Pronom"], reponseCorrecte: "Déterminant" },
                { enonce: "Nature de 'ils' ?", options: ["Pronom", "Nom"], reponseCorrecte: "Pronom" },
                { enonce: "Nature de 'dans' ?", options: ["Préposition", "Adverbe"], reponseCorrecte: "Préposition" },
                { enonce: "Nature de 'hier' ?", options: ["Adverbe", "Nom"], reponseCorrecte: "Adverbe" },
                { enonce: "Nature de 'table' ?", options: ["Nom", "Verbe"], reponseCorrecte: "Nom" },
                { enonce: "Nature de 'courir' ?", options: ["Verbe", "Nom"], reponseCorrecte: "Verbe" },
                { enonce: "Nature de 'grand' ?", options: ["Adjectif", "Verbe"], reponseCorrecte: "Adjectif" },
                { enonce: "Nature de 'une' ?", options: ["Déterminant", "Adjectif"], reponseCorrecte: "Déterminant" },
                { enonce: "Nature de 'avec' ?", options: ["Préposition", "Verbe"], reponseCorrecte: "Préposition" },
                { enonce: "Nature de 'chanter' ?", options: ["Verbe", "Nom"], reponseCorrecte: "Verbe" },
                { enonce: "Nature de 'liberté' ?", options: ["Nom", "Adjectif"], reponseCorrecte: "Nom" },
                { enonce: "Nature de 'joyeux' ?", options: ["Adjectif", "Nom"], reponseCorrecte: "Adjectif" },
                { enonce: "Nature de 'très' ?", options: ["Adverbe", "Verbe"], reponseCorrecte: "Adverbe" },
                { enonce: "Nature de 'nous' ?", options: ["Pronom", "Déterminant"], reponseCorrecte: "Pronom" },
                { enonce: "Nature de 'école' ?", options: ["Nom", "Adjectif"], reponseCorrecte: "Nom" },
                { enonce: "Nature de 'rouge' ?", options: ["Adjectif", "Verbe"], reponseCorrecte: "Adjectif" },
                { enonce: "Nature de 'finir' ?", options: ["Verbe", "Nom"], reponseCorrecte: "Verbe" },
                { enonce: "Nature de 'mais' ?", options: ["Conjonction", "Nom"], reponseCorrecte: "Conjonction" },
                { enonce: "Nature de 'sur' ?", options: ["Préposition", "Verbe"], reponseCorrecte: "Préposition" },
                { enonce: "Nature de 'demain' ?", options: ["Adverbe", "Nom"], reponseCorrecte: "Adverbe" },
                { enonce: "Nature de 'voiture' ?", options: ["Nom", "Adjectif"], reponseCorrecte: "Nom" },
                { enonce: "Nature de 'petit' ?", options: ["Adjectif", "Nom"], reponseCorrecte: "Adjectif" },
                { enonce: "Nature de 'avoir' ?", options: ["Verbe", "Pronom"], reponseCorrecte: "Verbe" },
                { enonce: "Nature de 'être' ?", options: ["Verbe", "Nom"], reponseCorrecte: "Verbe" },
                { enonce: "Nature de 'mon' ?", options: ["Déterminant", "Verbe"], reponseCorrecte: "Déterminant" },
                { enonce: "Nature de 'tu' ?", options: ["Pronom", "Nom"], reponseCorrecte: "Pronom" },
                { enonce: "Nature de 'lentement' ?", options: ["Adverbe", "Adjectif"], reponseCorrecte: "Adverbe" },
                { enonce: "Nature de 'ordinateur' ?", options: ["Nom", "Verbe"], reponseCorrecte: "Nom" },
                { enonce: "Nature de 'écrire' ?", options: ["Verbe", "Adjectif"], reponseCorrecte: "Verbe" },
                { enonce: "Nature de 'facile' ?", options: ["Adjectif", "Adverbe"], reponseCorrecte: "Adjectif" },
                { enonce: "Nature de 'jamais' ?", options: ["Adverbe", "Adjectif"], reponseCorrecte: "Adverbe" },
                { enonce: "Nature de 'un' ?", options: ["Déterminant", "Pronom"], reponseCorrecte: "Déterminant" },
                { enonce: "Nature de 'si' (condition) ?", options: ["Conjonction", "Nom"], reponseCorrecte: "Conjonction" },
                { enonce: "Nature de 'notre' ?", options: ["Déterminant", "Pronom"], reponseCorrecte: "Déterminant" },
                { enonce: "Nature de 'qui' (relatif) ?", options: ["Pronom", "Adverbe"], reponseCorrecte: "Pronom" },
                { enonce: "Nature de 'chez' ?", options: ["Préposition", "Adverbe"], reponseCorrecte: "Préposition" },
                { enonce: "Nature de 'malheureusement' ?", options: ["Adverbe", "Adjectif"], reponseCorrecte: "Adverbe" },
                { enonce: "Nature de 'ville' ?", options: ["Nom", "Verbe"], reponseCorrecte: "Nom" },
                { enonce: "Nature de 'voyager' ?", options: ["Verbe", "Nom"], reponseCorrecte: "Verbe" },
                { enonce: "Nature de 'silencieux' ?", options: ["Adjectif", "Adverbe"], reponseCorrecte: "Adjectif" },
                { enonce: "Nature de 'ce' ?", options: ["Déterminant", "Pronom"], reponseCorrecte: "Déterminant" },
                { enonce: "Nature de 'parce que' ?", options: ["Conjonction", "Préposition"], reponseCorrecte: "Conjonction" },
                { enonce: "Nature de 'ciel' ?", options: ["Nom", "Adjectif"], reponseCorrecte: "Nom" },
                { enonce: "Nature de 'profond' ?", options: ["Adjectif", "Verbe"], reponseCorrecte: "Adjectif" },
                { enonce: "Nature de 'souvent' ?", options: ["Adverbe", "Nom"], reponseCorrecte: "Adverbe" },
                { enonce: "Nature de 'ils' (pronom personnel) ?", options: ["Pronom", "Déterminant"], reponseCorrecte: "Pronom" },
                { enonce: "Nature de 'par' ?", options: ["Préposition", "Adverbe"], reponseCorrecte: "Préposition" },
                { enonce: "Nature de 'aimer' ?", options: ["Verbe", "Nom"], reponseCorrecte: "Verbe" },
                { enonce: "Nature de 'petit' (adjectif) ?", options: ["Nom", "Adjectif"], reponseCorrecte: "Adjectif" },
            ]},
            { type: "Conjugaison", couleur: "#9C27B0", questions: [
                { enonce: "Nous (chanter) au présent ?", options: ["chantons", "chantez"], reponseCorrecte: "chantons" },
                { enonce: "Ils (finir) au présent ?", options: ["finissent", "finit"], reponseCorrecte: "finissent" },
                { enonce: "Je (être) au futur simple ?", options: ["serai", "suis"], reponseCorrecte: "serai" },
                { enonce: "Vous (avoir) à l'imparfait ?", options: ["aviez", "avez"], reponseCorrecte: "aviez" },
                { enonce: "Tu (aller) au présent ?", options: ["vas", "va"], reponseCorrecte: "vas" },
                { enonce: "Elles (manger) au futur simple ?", options: ["mangeront", "mangent"], reponseCorrecte: "mangeront" },
                { enonce: "Il (faire) au présent ?", options: ["fait", "fais"], reponseCorrecte: "fait" },
                { enonce: "Nous (prendre) au présent ?", options: ["prenons", "prenez"], reponseCorrecte: "prenons" },
                { enonce: "Je (dire) au passé composé ?", options: ["ai dit", "dis"], reponseCorrecte: "ai dit" },
                { enonce: "Vous (voir) au futur simple ?", options: ["verrez", "voyez"], reponseCorrecte: "verrez" },
                { enonce: "Nous (partir) à l'imparfait ?", options: ["partions", "partâmes"], reponseCorrecte: "partions" },
                { enonce: "Tu (prendre) au passé composé ?", options: ["as pris", "prenais"], reponseCorrecte: "as pris" },
                { enonce: "Elles (venir) au présent ?", options: ["viennent", "vient"], reponseCorrecte: "viennent" },
                { enonce: "Il (vouloir) au présent ?", options: ["veut", "veux"], reponseCorrecte: "veut" },
                { enonce: "Je (savoir) au futur simple ?", options: ["saurai", "savais"], reponseCorrecte: "saurai" },
                { enonce: "Vous (faire) à l'imparfait ?", options: ["faisiez", "fîtes"], reponseCorrecte: "faisiez" },
                { enonce: "Nous (être) au passé simple ?", options: ["fûmes", "étions"], reponseCorrecte: "fûmes" },
                { enonce: "Tu (dire) au présent ?", options: ["dis", "dit"], reponseCorrecte: "dis" },
                { enonce: "Je (aller) à l'imparfait ?", options: ["allais", "allai"], reponseCorrecte: "allais" },
                { enonce: "Vous (pouvoir) au présent ?", options: ["pouvez", "peux"], reponseCorrecte: "pouvez" },
                { enonce: "Ils (croire) au présent ?", options: ["croient", "croyent"], reponseCorrecte: "croient" },
                { enonce: "Tu (voir) au passé composé ?", options: ["as vu", "vois"], reponseCorrecte: "as vu" },
                { enonce: "Nous (courir) au futur simple ?", options: ["courrons", "courions"], reponseCorrecte: "courrons" },
                { enonce: "Elle (dormir) à l'imparfait ?", options: ["dormait", "dormit"], reponseCorrecte: "dormait" },
                { enonce: "Je (mettre) au présent ?", options: ["mets", "met"], reponseCorrecte: "mets" },
                { enonce: "Vous (sortir) au passé composé ?", options: ["êtes sortis", "avez sorti"], reponseCorrecte: "êtes sortis" },
                { enonce: "Ils (se laver) au présent ?", options: ["se lavent", "se lave"], reponseCorrecte: "se lavent" },
                { enonce: "Nous (devoir) au présent ?", options: ["devons", "devons"], reponseCorrecte: "devons" },
                { enonce: "Tu (vouloir) à l'imparfait ?", options: ["voulais", "veux"], reponseCorrecte: "voulais" },
                { enonce: "Elle (lire) au futur simple ?", options: ["lira", "lisait"], reponseCorrecte: "lira" },
                { enonce: "Je (vivre) au présent ?", options: ["vis", "vit"], reponseCorrecte: "vis" },
                { enonce: "Vous (boire) au passé composé ?", options: ["avez bu", "boivez"], reponseCorrecte: "avez bu" },
                { enonce: "Ils (tenir) au présent ?", options: ["tiennent", "tiennent"], reponseCorrecte: "tiennent" },
                { enonce: "Tu (écrire) au passé simple ?", options: ["écrivis", "écris"], reponseCorrecte: "écrivis" },
                { enonce: "Nous (suivre) au présent ?", options: ["suivons", "suivez"], reponseCorrecte: "suivons" }
            ]}
        ]
    },
    sciences: {
        titre: "Sciences",
        modes: [
            { type: "Corps & Nature", couleur: "#FF5722", questions: [
                { enonce: "Quel organe pompe le sang ?", options: ["Cœur", "Foie"], reponseCorrecte: "Cœur" },
                { enonce: "Quel gaz absorbe-t-on quand on respire ?", options: ["Oxygène", "Azote"], reponseCorrecte: "Oxygène" },
                { enonce: "Combien d'os chez l'adulte ?", options: ["206", "150"], reponseCorrecte: "206" },
                { enonce: "L'eau à 0°C devient ?", options: ["Glace", "Vapeur"], reponseCorrecte: "Glace" },
                { enonce: "La Terre tourne autour de ?", options: ["Soleil", "Lune"], reponseCorrecte: "Soleil" },
                { enonce: "Organe de la vue ?", options: ["Œil", "Nez"], reponseCorrecte: "Œil" },
                { enonce: "Liquide rouge dans le corps ?", options: ["Sang", "Eau"], reponseCorrecte: "Sang" },
                { enonce: "Le squelette sert à ?", options: ["Soutenir", "Manger"], reponseCorrecte: "Soutenir" },
                { enonce: "Température d'ébullition de l'eau ?", options: ["100°C", "50°C"], reponseCorrecte: "100°C" },
                { enonce: "Planète rouge ?", options: ["Mars", "Vénus"], reponseCorrecte: "Mars" },
                { enonce: "Satellite de la Terre ?", options: ["Lune", "Soleil"], reponseCorrecte: "Lune" },
                { enonce: "Animal qui a des plumes ?", options: ["Oiseau", "Chien"], reponseCorrecte: "Oiseau" },
                { enonce: "Arbre qui fait des glands ?", options: ["Chêne", "Sapin"], reponseCorrecte: "Chêne" },
                { enonce: "Force qui attire au sol ?", options: ["Gravité", "Magnétisme"], reponseCorrecte: "Gravité" },
                { enonce: "L'estomac sert à ?", options: ["Digérer", "Respirer"], reponseCorrecte: "Digérer" },
                { enonce: "Les plantes absorbent quel gaz pour la photosynthèse ?", options: ["CO2", "O2"], reponseCorrecte: "CO2" },
                { enonce: "Quelle est la source d'énergie pour la photosynthèse ?", options: ["Lumière", "Chaleur"], reponseCorrecte: "Lumière" },
                { enonce: "Un mammifère pond-il des œufs ?", options: ["Non", "Oui"], reponseCorrecte: "Non" },
                { enonce: "La respiration se fait par quel organe ?", options: ["Poumons", "Estomac"], reponseCorrecte: "Poumons" },
                { enonce: "De quoi sont faits les os (principalement) ?", options: ["Calcium", "Fer"], reponseCorrecte: "Calcium" },
                { enonce: "Quelle partie de la plante absorbe l'eau ?", options: ["Racines", "Feuilles"], reponseCorrecte: "Racines" },
                { enonce: "Le cycle de l'eau inclut l'évaporation et la ?", options: ["Condensation", "Fusion"], reponseCorrecte: "Condensation" },
                { enonce: "Quelle est la plus petite unité du vivant ?", options: ["Cellule", "Organe"], reponseCorrecte: "Cellule" },
                { enonce: "Quelle planète est la plus proche du Soleil ?", options: ["Mercure", "Vénus"], reponseCorrecte: "Mercure" },
                { enonce: "Est-ce que le son se propage dans le vide ?", options: ["Non", "Oui"], reponseCorrecte: "Non" },
                { enonce: "Quel est l'organe qui filtre le sang et produit l'urine ?", options: ["Reins", "Foie"], reponseCorrecte: "Reins" },
                { enonce: "Le squelette des insectes est-il interne ou externe ?", options: ["Externe", "Interne"], reponseCorrecte: "Externe" },
                { enonce: "Le miel est produit par quel insecte ?", options: ["Abeille", "Guêpe"], reponseCorrecte: "Abeille" },
                { enonce: "L'eau salée gèle-t-elle plus facilement que l'eau douce ?", options: ["Non", "Oui"], reponseCorrecte: "Non" },
                { enonce: "Le Soleil est une étoile ou une planète ?", options: ["Étoile", "Planète"], reponseCorrecte: "Étoile" },
                { enonce: "Qu'est-ce qui cause les marées sur Terre ?", options: ["Lune", "Soleil"], reponseCorrecte: "Lune" },
                { enonce: "L'électricité statique est causée par des charges ?", options: ["Électriques", "Magnétiques"], reponseCorrecte: "Électriques" },
                { enonce: "L'unité de mesure de la force est le ?", options: ["Newton", "Volt"], reponseCorrecte: "Newton" },
                { enonce: "Le cerveau humain est protégé par le ?", options: ["Crâne", "Côtes"], reponseCorrecte: "Crâne" },
                { enonce: "Les métaux sont-ils de bons conducteurs de chaleur ?", options: ["Oui", "Non"], reponseCorrecte: "Oui" },
            ]},
        ]
    },
    histoire: {
        titre: "Histoire",
        modes: [
            { type: "Général", couleur: "#009688", questions: [
                { enonce: "Fin de la Préhistoire ?", options: ["Écriture", "Feu"], reponseCorrecte: "Écriture" },
                { enonce: "Peuple des Pyramides ?", options: ["Égyptiens", "Romains"], reponseCorrecte: "Égyptiens" },
                { enonce: "Roi Soleil ?", options: ["Louis XIV", "Henri IV"], reponseCorrecte: "Louis XIV" },
                { enonce: "Capitale Empire Romain ?", options: ["Rome", "Athènes"], reponseCorrecte: "Rome" },
                { enonce: "Découverte Amérique ?", options: ["1492", "1789"], reponseCorrecte: "1492" },
                { enonce: "Révolution Française ?", options: ["1789", "1945"], reponseCorrecte: "1789" },
                { enonce: "Jeanne d'Arc a libéré ?", options: ["Orléans", "Paris"], reponseCorrecte: "Orléans" },
                { enonce: "Chef des Dieux Grecs ?", options: ["Zeus", "Mars"], reponseCorrecte: "Zeus" },
                { enonce: "Vercingétorix était ?", options: ["Gaulois", "Romain"], reponseCorrecte: "Gaulois" },
                { enonce: "Charlemagne empereur en ?", options: ["800", "1515"], reponseCorrecte: "800" },
                { enonce: "Invention de Gutenberg ?", options: ["Imprimerie", "Radio"], reponseCorrecte: "Imprimerie" },
                { enonce: "Premier homme sur la Lune ?", options: ["1969", "2000"], reponseCorrecte: "1969" },
                { enonce: "Napoléon était ?", options: ["Empereur", "Roi"], reponseCorrecte: "Empereur" },
                { enonce: "Guerre 1914-1918 ?", options: ["1ère Guerre", "2ème Guerre"], reponseCorrecte: "1ère Guerre" },
                { enonce: "Château de François 1er ?", options: ["Chambord", "Versailles"], reponseCorrecte: "Chambord" },
            ]},
        ]
    }
};

// =========================================================================
// GESTIONNAIRE DE PRATIQUE COMPLET (Logique)
// =========================================================================

class QuizManager {
    constructor() {
        this.currentMatiereKey = null;
        this.currentQuestions = [];
        this.currentQuestion = null;
        this.isAnswerChecked = false;
        this.userSelectedAnswer = null;
        
        // Stats
        this.timerInterval = null;
        this.startTime = 0;
        this.questionsTentées = 0;
        this.questionsCorrectes = 0;
        this.currentStreak = 0;
        this.maxStreak = 0;
        this.flashcardIndex = 0;
        this.isFlashcardMode = false;

        // Gestion des erreurs avec localStorage
        this.errorHistoryKey = 'quizErrorHistory';
        this.errorHistory = this.loadErrorHistory();
    }
    
    // --- Outils ---
    playSound(id) {
        const sound = document.getElementById(id);
        if (sound) { sound.currentTime = 0; sound.play().catch(e => {}); }
    }

    startTimer() {
        this.startTime = Date.now();
        const timerElement = document.getElementById('quiz-timer');
        this.stopTimer();
        this.timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
            const minutes = String(Math.floor(elapsedTime / 60)).padStart(2, '0');
            const seconds = String(elapsedTime % 60).padStart(2, '0');
            timerElement.textContent = `⏱️ **${minutes}:${seconds}**`;
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; }
    }
    
    // --- Historique des Erreurs ---
    loadErrorHistory() {
        try {
            const storedHistory = localStorage.getItem(this.errorHistoryKey);
            return storedHistory ? JSON.parse(storedHistory) : {};
        } catch (e) {
            console.error("Erreur de chargement de l'historique:", e);
            return {};
        }
    }

    saveErrorHistory() {
        try {
            localStorage.setItem(this.errorHistoryKey, JSON.stringify(this.errorHistory));
        } catch (e) {
            console.error("Erreur de sauvegarde de l'historique:", e);
        }
    }
    
    addError(matiereKey, question) {
        if (!this.errorHistory[matiereKey]) {
            this.errorHistory[matiereKey] = [];
        }
        const isDuplicate = this.errorHistory[matiereKey].some(q => q.enonce === question.enonce);
        
        if (!isDuplicate) {
            this.errorHistory[matiereKey].push(question);
            this.saveErrorHistory();
        }
    }

    removeError(matiereKey, question) {
        if (this.errorHistory[matiereKey]) {
            this.errorHistory[matiereKey] = this.errorHistory[matiereKey].filter(
                q => q.enonce !== question.enonce
            );
            this.saveErrorHistory();
        }
    }
    // ----------------------------

    resetSessionStats() {
        this.questionsTentées = 0; this.questionsCorrectes = 0;
        this.currentStreak = 0; this.maxStreak = 0;
    }
    
    showSummary() {
        this.stopTimer();
        document.getElementById('summary-total').textContent = this.questionsTentées;
        document.getElementById('summary-correct').textContent = this.questionsCorrectes;
        document.getElementById('summary-streak').textContent = this.maxStreak;
        const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
        const minutes = String(Math.floor(elapsedTime / 60)).padStart(2, '0');
        const seconds = String(elapsedTime % 60).padStart(2, '0');
        document.getElementById('summary-time').textContent = `${minutes}:${seconds}`;

        document.getElementById('quiz-section').classList.add('hidden');
        document.getElementById('summary-modal').classList.remove('hidden');
    }

    // --- Navigation ---
    displayMatiereButtons() {
        const container = document.getElementById('matiere-options');
        container.innerHTML = '';
        
        for (const key in QUIZ_DATA) {
            const matiere = QUIZ_DATA[key];
            const button = document.createElement('button');
            button.className = 'matiere-btn';
            // Utilise la couleur du premier mode trouvé ou une couleur par défaut
            button.style.backgroundColor = matiere.modes[0]?.couleur || '#007bff'; 
            button.setAttribute('onclick', `quizManager.displayModeButtons('${key}', '${matiere.titre}')`);
            button.textContent = matiere.titre;
            container.appendChild(button);
        }
    }

    displayModeButtons(matiereKey, matiereNom) {
        this.currentMatiereKey = matiereKey;
        const matiereData = QUIZ_DATA[matiereKey];
        const container = document.getElementById('cibled-mode-options');
        container.innerHTML = '';
        
        document.getElementById('mode-title').textContent = `${matiereNom}`;
        
        // 1. Boutons des modes existants (Nature, Conjugaison, Calcul, etc.)
        matiereData.modes.forEach(mode => {
            const button = document.createElement('button');
            button.className = 'matiere-btn';
            button.style.backgroundColor = mode.couleur;
            button.setAttribute('onclick', `quizManager.startPracticeSession('${matiereKey}', 'ciblé', '${mode.type}')`);
            button.textContent = `${mode.type} (${mode.questions.length} Q)`; 
            container.appendChild(button);
        });
        
        // 2. Bouton Pratiquer mes Erreurs
        const errorCount = this.errorHistory[matiereKey] ? this.errorHistory[matiereKey].length : 0;
        const errorButton = document.createElement('button');
        errorButton.className = 'matiere-btn';
        errorButton.style.backgroundColor = errorCount > 0 ? '#f44336' : '#cccccc';
        errorButton.disabled = errorCount === 0;
        errorButton.setAttribute('onclick', `quizManager.startPracticeSession('${matiereKey}', 'erreurs')`);
        errorButton.textContent = `❌ Pratiquer mes erreurs (${errorCount} Q)`; 
        container.appendChild(errorButton);
        
        // Les boutons Mixte et Flashcard sont déjà dans le HTML, ils n'ont pas besoin d'être régénérés.
    }

    // --- Mode Pratique (Quiz) ---
    startPracticeSession(matiereKey, mode, typeQuestion = null) {
        this.resetSessionStats();
        this.isFlashcardMode = false;
        this.currentMatiereKey = matiereKey;

        if (mode === 'erreurs') {
            this.currentQuestions = this.errorHistory[matiereKey] || [];
            document.getElementById('quiz-title').textContent = `Pratiquer mes erreurs`;
        } else if (mode === 'mixte') {
            this.currentQuestions = QUIZ_DATA[matiereKey].modes.flatMap(m => m.questions);
            document.getElementById('quiz-title').textContent = `Pratique Mixte`;
        } else if (mode === 'ciblé') {
            const selectedMode = QUIZ_DATA[matiereKey].modes.find(m => m.type === typeQuestion);
            this.currentQuestions = selectedMode ? selectedMode.questions : [];
            document.getElementById('quiz-title').textContent = typeQuestion;
        }
        
        if (this.currentQuestions.length === 0) { 
            if (mode === 'erreurs') {
                alert("Bravo ! Aucune erreur enregistrée pour cette matière. Retour au menu.");
            } else {
                 alert("Aucune question.");
            }
            if (typeof showModeSelection === 'function') {
                showModeSelection(); 
            }
            return; 
        }

        document.getElementById('initial-screen')?.classList.add('hidden');
        document.getElementById('mode-selection')?.classList.add('hidden');
        document.getElementById('quiz-section')?.classList.remove('hidden');

        this.displayNextQuestion();
        this.startTimer();
    }
    
    displayNextQuestion() {
        // Mélange les questions
        if (this.currentQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.currentQuestions.length);
            this.currentQuestion = this.currentQuestions[randomIndex];
        } else {
             // Fin de la session si le tableau est vide (ex: si toutes les erreurs ont été corrigées)
             this.showSummary();
             return;
        }
        
        this.isAnswerChecked = false;
        this.userSelectedAnswer = null;
        document.getElementById('feedback-message').textContent = ''; 
        document.getElementById('quiz-next-btn').textContent = "Valider";
        document.getElementById('quiz-next-btn').disabled = true;
        
        // Mise à jour de l'affichage
        document.getElementById('quiz-score').textContent = `Score: ${this.questionsCorrectes}/${this.questionsTentées}`;
        document.getElementById('quiz-streak').textContent = `🔥 Série: ${this.currentStreak}`;
        
        document.getElementById('question-enonce').textContent = `[Q.${this.questionsTentées + 1}] ${this.currentQuestion.enonce}`;
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        // Saisie ou Choix Multiples
        if (this.currentQuestion.type === 'Saisie' || !this.currentQuestion.options) {
            optionsContainer.innerHTML = `<input type="text" id="saisie-answer" placeholder="Réponse...">`;
            document.getElementById('quiz-next-btn').disabled = false;
        } else {
            const mixedOptions = [...this.currentQuestion.options];
            if (!mixedOptions.includes(this.currentQuestion.reponseCorrecte)) {
                 mixedOptions.push(this.currentQuestion.reponseCorrecte);
            }
            mixedOptions.sort(() => Math.random() - 0.5);
            
            mixedOptions.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.onclick = () => this.selectAnswer(option, button);
                optionsContainer.appendChild(button);
            });
        }
    }

    selectAnswer(answer, element) {
        if (this.isAnswerChecked) return; 
        this.userSelectedAnswer = answer;
        document.querySelectorAll('#options-container button').forEach(btn => btn.classList.remove('selected'));
        element.classList.add('selected');
        document.getElementById('quiz-next-btn').disabled = false;
    }

    handleAnswerValidation() {
        if (!this.isAnswerChecked) {
            this.questionsTentées++;
            let userAnswer = this.userSelectedAnswer;
            
            if (this.currentQuestion.type === 'Saisie' || !this.currentQuestion.options) {
                const inputElement = document.getElementById('saisie-answer');
                userAnswer = inputElement ? inputElement.value : '';
            }
            
            if (!userAnswer || userAnswer.trim() === '') {
                document.getElementById('feedback-message').textContent = "Répondez d'abord !";
                this.questionsTentées--; // Annule la tentative si l'utilisateur n'a rien mis
                return;
            }

            const normalize = (str) => str.trim().toLowerCase().replace(/[^a-z0-9éèêà\s]/g, '');
            const isCorrect = normalize(userAnswer) === normalize(this.currentQuestion.reponseCorrecte);
            
            const feedbackEl = document.getElementById('feedback-message');
            feedbackEl.style.color = isCorrect ? '#4caf50' : '#f44336'; 
            feedbackEl.textContent = isCorrect ? "✅ Bravo !" : `❌ Non. Réponse : ${this.currentQuestion.reponseCorrecte}`;
            
            if (isCorrect) {
                this.questionsCorrectes++; 
                this.currentStreak++; 
                this.maxStreak = Math.max(this.maxStreak, this.currentStreak);
                this.playSound('success-sound');
                
                this.removeError(this.currentMatiereKey, this.currentQuestion); 
            } else {
                this.currentStreak = 0; 
                this.playSound('fail-sound');
                
                this.addError(this.currentMatiereKey, this.currentQuestion);
            }
            
            document.getElementById('quiz-score').textContent = `Score: ${this.questionsCorrectes}/${this.questionsTentées}`;
            document.getElementById('quiz-streak').textContent = `🔥 Série: ${this.currentStreak}`;
            document.getElementById('quiz-next-btn').textContent = "Suivant >>";
            this.isAnswerChecked = true;
            document.querySelectorAll('#options-container button').forEach(btn => btn.disabled = true);

        } else {
            this.displayNextQuestion();
        }
    }

    // --- Mode Révision (Flashcards) ---
    startFlashcardSession(matiereKey) {
        this.currentMatiereKey = matiereKey;
        this.isFlashcardMode = true;
        this.currentQuestions = QUIZ_DATA[matiereKey].modes.flatMap(m => m.questions);
        this.flashcardIndex = 0;
        
        if (this.currentQuestions.length === 0) {
            alert("Aucune carte de révision disponible.");
            showModeSelection();
            return;
        }
        
        this.displayFlashcard();
        document.getElementById('flashcard-title').textContent = `Révision : ${QUIZ_DATA[matiereKey].titre}`;
        
        document.getElementById('initial-screen')?.classList.add('hidden');
        document.getElementById('mode-selection')?.classList.add('hidden');
        document.getElementById('flashcard-section')?.classList.remove('hidden');
    }

    displayFlashcard() {
        if (this.currentQuestions.length === 0) return;
        const card = this.currentQuestions[this.flashcardIndex];
        
        document.getElementById('flashcard-label').textContent = "QUESTION";
        document.getElementById('flashcard-label').style.color = "#333";
        document.getElementById('flashcard-text').textContent = card.enonce;
        document.getElementById('flashcard-text').style.color = "#333";
        
        document.getElementById('flashcard-card').classList.remove('flipped');
    }

    toggleFlashcardAnswer() {
        const card = this.currentQuestions[this.flashcardIndex];
        const cardDiv = document.getElementById('flashcard-card');
        const label = document.getElementById('flashcard-label');
        const text = document.getElementById('flashcard-text');

        if (cardDiv.classList.contains('flipped')) {
            cardDiv.classList.remove('flipped');
            label.textContent = "QUESTION";
            label.style.color = "#333";
            text.textContent = card.enonce;
            text.style.color = "#333";
        } else {
            cardDiv.classList.add('flipped');
            label.textContent = "RÉPONSE";
            label.style.color = "#2e7d32";
            text.textContent = card.reponseCorrecte;
            text.style.color = "#2e7d32";
        }
    }

    nextFlashcard() {
        this.flashcardIndex = (this.flashcardIndex + 1) % this.currentQuestions.length;
        this.displayFlashcard();
    }
    
    prevFlashcard() {
        this.flashcardIndex = (this.flashcardIndex - 1 + this.currentQuestions.length) % this.currentQuestions.length;
        this.displayFlashcard();
    }
}

window.quizManager = new QuizManager();
