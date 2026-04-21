<?php
// backend/api/news.php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 100;
        $stmt = $pdo->prepare("SELECT * FROM news ORDER BY created_at DESC LIMIT :limit");
        $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
        $stmt->execute();
        $news = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($news);
        break;

    case 'POST':
        // Basic protection - should use session/token validation in production
        $data = json_decode(file_get_contents("php://input"), true);
        
        if (!empty($data['title']) && !empty($data['excerpt']) && !empty($data['date_label'])) {
            try {
                $stmt = $pdo->prepare("INSERT INTO news (title, excerpt, date_label) VALUES (?, ?, ?)");
                $stmt->execute([$data['title'], $data['excerpt'], $data['date_label']]);
                echo json_encode(["status" => "success", "message" => "Article published"]);
            } catch(PDOException $e) {
                echo json_encode(["status" => "error", "message" => "Store failed: " . $e->getMessage()]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Incomplete data"]);
        }
        break;

    case 'DELETE':
        $data = json_decode(file_get_contents("php://input"), true);
        if (!empty($data['id'])) {
            $stmt = $pdo->prepare("DELETE FROM news WHERE id = ?");
            $stmt->execute([$data['id']]);
            echo json_encode(["status" => "success", "message" => "Article removed"]);
        }
        break;
}
?>
