<?

header('Content-Type: text/html; charset=utf-8');
// ----------------------------êîíôèãóðàöèÿ-------------------------- // 
 
$adminemail="serega40-in@yandex.ru";  // e-mail àäìèíà 
 
$date=date("d.m.y"); // ÷èñëî.ìåñÿö.ãîä 
 
$time=date("H:i"); // ÷àñû:ìèíóòû:ñåêóíäû 
 
 
//---------------------------------------------------------------------- // 

// Ïðèíèìàåì äàííûå ñ ôîðìû 

$tel=$_POST['tel'];  
$email=$_POST['email'];  
$comm=$_POST['comm'];
$where=$_POST['where'];



 
$msg=" 

<p>$date $time</p> 

<p>Откуда: $where</p>

<p>Телефон: $tel</p>
<p>Email: $email</p>
<p>Комментарий: $comm</p>

<br/>
";

$zag="insmmuplevel.ru Заявка";
$msg=iconv('utf-8', 'cp1251', $msg);
$zag=iconv('utf-8', 'cp1251', $zag);


mail("serega40-in@yandex.ru", "$zag", "$msg", "Content-type: text/html; charset=windows-1251\r\n\r\n");

// Âûâîäèì ñîîáùåíèå ïîëüçîâàòåëþ 


$token = "521964598:AAGvuzyNmbZgPCIeKBJdiRIl0oIubygsHsc";
$chat_id = "-290579997";


$emailFieldset = "Email: ";
$phoneFieldset = "Телефон: ";
$whereFieldset = "Откуда: ";
$commFieldset = "Комментарий: ";

$arr = array(
  $emailFieldset => $email,
  $phoneFieldset => $tel,
  $whereFieldset => $where,
  $commFieldset => $comm
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."\r\n";
};

  define('BOT_TOKEN', '521964598:AAGvuzyNmbZgPCIeKBJdiRIl0oIubygsHsc');
  define('API_URL', 'https://api.telegram.org/bot'.BOT_TOKEN.'/');
 
  /**
  * Отправление сообщений
  * 
  * Документация: https://core.telegram.org/api
  * 
  * 
  */
  class soTelegramMessager
  { 
    /**
    * Делает запрос к серверу
    * 
    * @param resource $handle
    * 
    * @return boolean
    */
    protected function _exec_curl_request($handle)
    {
      $response = curl_exec($handle);
      if ($response === false)
      {
        $errno = curl_errno($handle);
        $error = curl_error($handle);
        error_log("Curl returned error $errno: $error\n");
        curl_close($handle);
        return false;
      }
 
      $http_code = intval(curl_getinfo($handle, CURLINFO_HTTP_CODE));
      curl_close($handle);
      if ($http_code >= 500)
      {
        // do not wat to DDOS server if something goes wrong
        sleep(10);
        return false;
      }
      else if ($http_code != 200)
      {
        $response = json_decode($response, true);
        error_log("Request has failed with error {$response['error_code']}: {$response['description']}\n");
        if ($http_code == 401)
        {
          throw new Exception('Invalid access token provided');
        }
        return false;
      }
      else
      {
        $response = json_decode($response, true);
        if (isset($response['description']))
        {
          error_log("Request was successfull: {$response['description']}\n");
        }
        $response = $response['result'];
      }
 
      return $response;
    }
 
    /**
    * Подготовка запроса
    * 
    * @param string $method
    * @param array $parameters
    * 
    * @return boolean
    */
    protected function _apiRequest($method, $parameters)
    {
      if (!is_string($method))
      {
        error_log("Method name must be a string\n");
        return false;
      }
 
      if (!$parameters)
      {
        $parameters = array();
      }
      else if (!is_array($parameters))
      {
        error_log("Parameters must be an array\n");
        return false;
      }
 
      foreach($parameters as $key => & $val)
      {
        // encoding to JSON array parameters, for example reply_markup
        if (!is_numeric($val) && !is_string($val))
        {
          $val = json_encode($val);
        }
      }
 
      $url = API_URL . $method . '?parse_mode=html&' . http_build_query($parameters);
 
      $handle = curl_init($url);
      curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($handle, CURLOPT_CONNECTTIMEOUT, 5);
      curl_setopt($handle, CURLOPT_TIMEOUT, 60);
      return $this->_exec_curl_request($handle);
    }
 
    /**
    * Отправка сообщения 
    * 
    * @param int $id_chat
    * @param string $sMessage
    * 
    * @return void
    */
    public function sendMessage($id_chat, $sMessage)
    {
      //https://api.telegram.org/botID:HASH/sendMessage?chat_id=111&text=Nice+to+meet+you
 
      $this->_apiRequest('sendMessage', array(
        'chat_id' => $id_chat,
        'text' => $sMessage,
      ));
    }  
  }
 
 
  $oTelegramMessager = new soTelegramMessager();
  $oTelegramMessager->sendMessage('-290579997', $txt);

?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Страница спасибо</title>
</head>
<body>
  <h1>Пока заглушка</h1>
</body>
</html>