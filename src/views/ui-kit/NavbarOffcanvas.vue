<template>
  <header class="navbar navbar-expand-lg bg-light shadow-sm fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand flex-shrink-0">
        <img src="@/assets/img/logo.svg" width="47" alt="Silicon" />
        Silicon
      </a>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" id="navbarNav">
        <div class="offcanvas-header shadow-sm">
          <h3 class="offcanvas-title fs-lg">Menu</h3>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body pt-3">
          <ul class="navbar-nav mt-0">
            <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
                >Dropdown</a
              >
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action link</a></li>
                <li class="dropdown">
                  <a
                    class="dropdown-item dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Dropdown</a
                  >
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action link</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><a class="dropdown-item" href="#">Yet another link</a></li>
                  </ul>
                </li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <div class="container pt-5 pb-4">
    <h1 class="h4 pt-5 mt-2">Offcanvas menu example</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
      odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
      qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
      fugiat quo voluptas nulla pariatur?
    </p>
    <p>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
      voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
      cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
      laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero
      tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
      placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
      autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
      voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
      sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
      doloribus asperiores repellat.
    </p>
  </div>
</template>

<script setup lang="ts"></script>
