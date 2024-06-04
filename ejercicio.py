import random

def adivinar_numero():
    print("Piensa en un número del 1 al 50.")
    input("Presiona Enter cuando estés listo para continuar...")
    
    limite_inferior = 1
    limite_superior = 50
    intentos = 0
    
    while True:
        # La máquina hace una suposición
        suposicion = random.randint(limite_inferior, limite_superior)
        print(f"¿Es {suposicion} tu número?")
        
        # Se pregunta al usuario si la suposición es correcta o no
        respuesta = input("Respuesta (frío/caliente/si): ").lower()
        
        # Si la suposición es correcta, terminamos el juego
        if respuesta == "si":
            print("¡La máquina ha adivinado tu número!")
            break
        elif respuesta == "caliente":
            intentos += 1
        elif respuesta == "frío":
            intentos += 1
            # Si la suposición es incorrecta, ajustamos los límites
            if suposicion < limite_inferior:
                limite_inferior = suposicion
            elif suposicion > limite_superior:
                limite_superior = suposicion
                
            # Si los límites se cruzan, no hay solución
            if limite_inferior > limite_superior:
                print("¡Algo ha salido mal! No puedo adivinar tu número.")
                break
        else:
            print("Por favor, responde 'frío', 'caliente', o 'si'.")

    print(f"Número de intentos: {intentos}")

adivinar_numero()

