import React, { useEffect } from "react";

export default function Download() {
    useEffect(() => {
        let deferredPrompt;

        window.addEventListener("beforeinstallprompt", (e) => {
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI notify the user they can add to home screen
            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("User accepted the A2HS prompt");
                } else {
                    console.log("User dismissed the A2HS prompt");
                }
                deferredPrompt = null;
            });
        });
    }, []);
    return <div>Your Download Must have started!</div>;
}
