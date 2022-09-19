const time = (req, res) => { 
    const body = req.body
   
    res.json({
      fecha:  new Date().toDateString(),
      hora:  new Date().getHours()
    })
 };

 module.exports = {time}

 /*class Authenticate extends Middleware
 {

/*
  //AQUI ES DONDE GENERA EL MENSAJE DE NO AUTENTICADO
  protected function unauthenticated($request, array $guards)
  {
      throw new AuthenticationException(
          'Unauthenticated.', $guards, $this->redirectTo($request)
      );
  }

  

  //AQUI SE SUPONE ME RETORNA A LOGIN PERO NO LO HACE
  protected function redirectTo($request)
  {
      if (! $request->expectsJson()) {
          return route('login');
      }
  }
} */
