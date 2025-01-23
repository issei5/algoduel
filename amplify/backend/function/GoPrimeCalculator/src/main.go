package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Response struct {
	Message string `json:"message"`
	Input   interface{} `json:"input"`
}

func lambdaHandler(w http.ResponseWriter, r *http.Request) {
	// Lambda用のレスポンスを準備
	response := Response{
		Message: "Hello from Go Lambda!",
		Input:   r.Body,  // リクエストボディをそのまま返す
	}

	// レスポンスを書き出す
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	err := json.NewEncoder(w).Encode(response)
	if err != nil {
		log.Fatal("Failed to encode response: ", err)
	}
}

func main() {
	http.HandleFunc("/", lambdaHandler)
	fmt.Println("Starting Lambda function")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
