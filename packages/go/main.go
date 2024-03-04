package main

import (
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type RandomData struct {
	RandomString string `json:"randomString"`
}

func generateRandomString(w http.ResponseWriter, r *http.Request) {
	// Generate 256 random bytes
	randomBytes := make([]byte, 256)
	_, err := rand.Read(randomBytes)
	if err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	// Convert the bytes to a hex string
	randomString := hex.EncodeToString(randomBytes)

	// Create an instance of RandomData
	responseData := RandomData{RandomString: randomString}

	// Set the header to application/json and encode responseData to JSON
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(responseData); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", generateRandomString).Methods("GET")

	log.Println("Server listening on port 3000")
	log.Fatal(http.ListenAndServe("127.0.0.1:3000", r))
}
