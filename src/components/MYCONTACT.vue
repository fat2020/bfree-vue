<template>
 <section>

<div class="vlogo "> 
    <img src="img/logo_breakfree.png" />
     </div>
     <header>
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
    </header>
    <div class="clearfix"></div>
 <div class="background_white row no_padding" style="display: flow-root;">
 
   <div class="h_slider"><span>CONTACTEZ-NOUS</span></div>
    <div class="clearfix"></div>
   <div class="contact_form col-md-5 col-xs-12 col-sm-12  pull-left">
   
   <form action="">
      
       <!-- Form Group -->
       <div class="form-group">
      <label class="control-label label_v2">Demande</label>
        <div class="input-group">
        <select class="form-control select2" name="" id="">
        
        <option value="">Test</option>

         </select>
         </div>
         </div>
       <!-- Form Group -->  
       
        <!-- Form Group -->
         <div class="form-group">
      <label class="control-label label_v2">Précisions</label>
        <div class="input-group">
        <textarea name="" style="resize: none;"  class="form-control" placeholder="Précisez votre demande"></textarea>
         </div>
         </div>
       <!-- Form Group -->  
       
        <!-- Form Group -->
         <div class="form-group">
      <label class="control-label label_v2">Nom *</label>
        <div class="input-group">
        <input type="text" name="" class="form-control" placeholder="Votre nom complet" required=""/>
        </div>
         </div>
       <!-- Form Group -->    
        <!-- Form Group -->
        <div class="form-group">
      <label class="control-label label_v2">Téléphone *</label>
        <div class="input-group">
        <input type="text" name="" class="form-control" placeholder="Votre numéro de téléphone" required=""/>
        </div>
         </div>
       <!-- Form Group -->   
        <!-- Form Group -->
        <div class="form-group">
      <label class="control-label label_v2">Email *</label>
        <div class="input-group">
        <input type="text" name="" class="form-control" placeholder="Votre adresse e-mail" required=""/>
        </div>
         </div>
       <!-- Form Group -->     
       
       <div class="pull-left">
        <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                <label class="form-check-label" for="invalidCheck2">
                  En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre strict de ma demande. *
Case à cocher obligatoire

                </label>
              </div>
            </div>
       </div>
       
        <div class="pull-right">
        <button class="btn btn-info" type="submit">Envoyer</button>
        </div>  
        
        
   </form>
   </div>
   
   <div class="col-md-6 col-xs-12 col-sm-12 pull-right maps " style="height:550px;">
   <!-- TEST -->
    <iframe style="height:550px; width: 91%; border:0 ;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41998.66812232338!2d2.292812619575987!3d48.85979771360612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672017ad8a49f%3A0x961dede5aeb1ff83!2sCoul%C3%A9e%20verte%20Ren%C3%A9-Dumont!5e0!3m2!1sfr!2sfr!4v1601137270021!5m2!1sfr!2sfr" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
   </div>
 
 </div>
  <div class="clearfix"></div>
     <!-- Footer -->
    <div class="footer">
        
            <h3> Copyright &copy; Fatima.O </h3>
               
              <div class="social_media">
                <a href="https://www.facebook.com" target="_blank" class="fa fa-facebook"></a>
                <a href="https://www.twitter.com" target="_blank" class="fa fa-twitter"></a> 
                 
             </div>  
    </div>
  










     </section>
</template>
<script>
export default {
  name: "test"
}
</script>