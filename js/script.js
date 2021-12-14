console.log("script is loading");

let firstStage = {
    id: 1,
    story: "Gilbert woke up in the middle of a hallway in a mansion and is confused. Get him out of it!",
    options: ["start heading up the hall", "start heading down the hall"]
} 
if (firstStage.options == "start heading up the hall") {
            let secondStage = {
            id: 2, 
            story: "Gilbert stumbles upon a weirdly shaped key on the ground. What should he do with it?",
            options: ["Take it and run down the hallway.", "leave it and run backwards."];
        }
                    if (secondStage.options == "Take it and run down the hallway.") {
                        let thirdStage = {
                            id: 3, 
                            story: "Gilbert discovers a secret door that has air coming through its keyhole.",
                            options: ["Use the key on the secret door", "Leave the key and the secret door and try to leave through the front entrance."];
                        }
            }
                    else if (secondStage.options == "leave it and run backwards.") {
                        let thirdStage = {
                            id: 3,
                            story: "As Gilbert is running back down, he finds a mysterious trapdoor and lifts the latch.",
                            options: ["Hop through the trapdoor", "ignore the trapdoor and keep running down the hall"];
                        
                        }
                    
            }
     }
else if (firstStage.options == "start heading down the hall") {
            let secondStage = {
            id: 2, 
            story:"Gilbert hears something metal like chains drag across the floor.",
            options: ["Start running away and into a room.", "investigate the noise."];
        }
                if (secondStage.options == "Start running away and into a room.") {
                    let thirdStage = {
                        id: 3,
                        story: "Gilbert finds a key inside a drawer in the room.",
                        options: ["bring the key to the main entrance and try to unlock it", "leave the key and go upstairs."]
                        }
                }
                else if (secondStage.options == "investigate the noise.") {
                    let thirdStage = {
                        id: 3,
                        story: "Gilbert discovers a hideous monster wrapped in chains around the corner!",
                        options: ["Try to fight the monster", "run back quickly"];
                        }
                }
     }
