<template>
    <div class="wrap">
           <nav class="menu_main">
       
       <ul>
       
        <li> Home </li>
         <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Activités</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="activites/loisirs.html">Loisirs</a>
                    <a class="dropdown-item" href="activites/salle_de_casse.html">Salle de casse</a>
                    <a class="dropdown-item" href="activites/enfants.html">Enfants</a>
                    <a class="dropdown-item" href="activites/therapie.html">Thérapie</a>
                </div>
            </li>
            <li>
                <a href="tarifs.html">Tarifs</a>
            </li>
            <li>
                <a href="contact.html">Contact</a>
            </li>
            <li>
                <a href="reservation.html">Reservez</a>
            </li>
       </ul>
    
    </nav>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: "Navbar",
  compenents:
  Navbar
}
</script>