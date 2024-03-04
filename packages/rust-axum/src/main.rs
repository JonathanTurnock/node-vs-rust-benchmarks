use hex::ToHex;
use rand::{rngs::OsRng, RngCore};
use serde::Serialize;

#[derive(Serialize)]
struct RandomHexString {
    random_string: String,
}

fn crypto_random_bytes(length: usize) -> String {
    let mut bytes = vec![0u8; length];
    OsRng.fill_bytes(&mut bytes);

    bytes.encode_hex::<String>()
}

use axum::{routing::get, Json, Router};
async fn index() -> Json<RandomHexString> {
    let data = RandomHexString {
        random_string: crypto_random_bytes(256),
    };

    Json(data)
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/", get(index));

    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .expect("Failed to bind server to port 3000");
    axum::serve(listener, app).await.unwrap();
}