<?php 
  if ($_GET['username'] == "Joseph") {
    $message1 = "Hey Joe";
    $message2 = "Hey James";
  }
  if ($_GET['username'] == "Patrick") {
    $message1 = "Sup Pat";
    $message2 = "Nm wbu";
  }
  if ($_GET['username'] == "Dylan") {
    $message1 = "Yo Dyl";
    $message2 = "What's up James?";
  }
?>
<div class="navbar">
  <div class="navbar-inner">
    <div class="left"><a href="#" class="link icon-only open-panel"> <i class="icon icon-bars"></i></a></div>
    <div class="center sliding" style="color:rgb(91,134,229);"><?php echo $_GET['username']; ?></div>
    <div class="right">
      <a href="index.html" class="back link" onclick="reset();"> <i class="icon icon-forward"></i></a>
    </div>
  </div>
</div>
<div class="pages">
  <!-- Page, data-page contains page name-->
  <div data-page="about" class="page">
    <!-- Scrollable page content-->
    <div class="page-content" style="background-color: #FFF;">
      <!-- <div class="content-block">
        <center>Send a message and it'll show up here.</center>
      </div> -->
      <div class="list-block">
        <div class="content-block-title" style="margin-right: 7px; margin-left: 7px; color: #ff5b5b;">Me</div>
        <ul>
          <li class="item-content" style="border-left: solid #ff5b5b; width: 95%; margin-right: auto; margin-left: auto;">
            <div class="item-inner">
              <div class="item-title"><?php echo $message1; ?></div>
            </div>
          </li>
        </ul>
        <div class="content-block-title" style="margin-right: 7px; margin-left: 7px; color: #89b6ff;"><?php echo $_GET['username']; ?></div>
        <ul>
          <li class="item-content" style="border-left: solid #89b6ff; width: 95%; margin-right: auto; margin-left: auto;">
            <div class="item-inner">
              <div class="item-title"><?php echo $message2; ?></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>