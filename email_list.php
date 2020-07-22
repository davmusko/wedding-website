<?php
  $dbhost = 'localhost';
  $dbuser = 'davemusk_wedding';
  $dbpass = 'Hi*5DwZLOJ4N';
  $dbname = 'davemusk_wedding';
  $conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);

  if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
  }

  $fullName = $_POST['full-name'];
  $email = $_POST['email'];

  $sql = "INSERT INTO guest_mailing_list (name, email) VALUES ('$fullName','$email')";
if (mysqli_query($conn, $sql)) {
  echo "Successfully signed-up";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

  mysqli_close($conn);
  echo "redirecting back to return2.love"
?>
<script>
setTimeout(() => {  window.location.replace("https://return2.love/"); }, 2000);
</script>