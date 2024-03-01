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

// region axum
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
// endregion

// region actix
// use actix_web::{web, App, HttpResponse, HttpServer, Responder};
// #[actix_web::main]
// async fn main() -> std::io::Result<()> {
//     HttpServer::new(|| App::new().service(web::resource("/").to(index)))
//         .bind("127.0.0.1:3000")?
//         .run()
//         .await
// }
//
// async fn index() -> impl Responder {
//     let data = RandomHexString {
//         random_string: crypto_random_bytes(256),
//     };
//
//     HttpResponse::Ok().json(data)
// }
// endregion
