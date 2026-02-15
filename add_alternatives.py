#!/usr/bin/env python3

import re

# Dictionary with alternatives for each exercise ID
alternatives_data = {
    'dips': [
        {
            'name': 'Tricep Dips en silla',
            'reason': 'Solo silla o banco',
            'youtubeUrl': 'https://www.youtube.com/watch?v=0326dy_-CzM',
            'briefTechnique': 'Manos en borde de silla, codos hacia atrás, baja hasta 90° flexión'
        },
        {
            'name': 'Assisted Dips',
            'reason': 'Con banda elástica',
            'youtubeUrl': 'https://www.youtube.com/watch?v=Li8Pa7CWL-Q',
            'briefTechnique': 'Banda bajo rodillas o pies para reducir peso corporal'
        }
    ],
    'pushups': [
        {
            'name': 'Incline Push-ups',
            'reason': 'Más fácil - superficie elevada',
            'youtubeUrl': 'https://www.youtube.com/watch?v=cfns5VDVVvk',
            'briefTechnique': 'Manos en superficie elevada, reduce dificultad manteniendo forma'
        },
        {
            'name': 'Knee Push-ups',
            'reason': 'Progresión más fácil',
            'youtubeUrl': 'https://www.youtube.com/watch?v=jWxvty2KROs',
            'briefTechnique': 'Apoyado en rodillas en lugar de pies, mantén línea de rodillas a cabeza'
        },
        {
            'name': 'Archer Push-ups',
            'reason': 'Progresión más difícil',
            'youtubeUrl': 'https://www.youtube.com/watch?v=lnR_kb7ZJKE',
            'briefTechnique': 'Un brazo empuja, otro se extiende al lado, alterna lados'
        }
    ],
    'decline-pushups': [
        {
            'name': 'Handstand Push-ups',
            'reason': 'Progresión avanzada',
            'youtubeUrl': 'https://www.youtube.com/watch?v=tQhrk6WMcKw',
            'briefTechnique': 'Contra pared, cabeza hacia abajo, mayor énfasis en hombros'
        },
        {
            'name': 'Pike Push-ups',
            'reason': 'Preparación para handstand',
            'youtubeUrl': 'https://www.youtube.com/watch?v=x4YNq24tYwM',
            'briefTechnique': 'V invertida, baja cabeza hacia manos, similar a decline'
        }
    ],
    'close-grip-pushups': [
        {
            'name': 'Tricep Dips',
            'reason': 'Mayor énfasis en tríceps',
            'youtubeUrl': 'https://www.youtube.com/watch?v=0326dy_-CzM',
            'briefTechnique': 'En silla o barras paralelas, codos hacia atrás'
        },
        {
            'name': 'Diamond Push-ups progresión',
            'reason': 'Manos en triángulo',
            'youtubeUrl': 'https://www.youtube.com/watch?v=J0DnG1_S92I',
            'briefTechnique': 'Manos forman diamante, máximo énfasis en tríceps'
        }
    ],
    'deficit-pushups': [
        {
            'name': 'Ring/TRX Push-ups',
            'reason': 'Inestabilidad añadida',
            'youtubeUrl': 'https://www.youtube.com/watch?v=4jRoHFNMbRM',
            'briefTechnique': 'Manos en anillas o TRX, mayor rango de movimiento e inestabilidad'
        },
        {
            'name': 'Medicine Ball Push-ups',
            'reason': 'Una mano elevada',
            'youtubeUrl': 'https://www.youtube.com/watch?v=cU8hv2hZBWE',
            'briefTechnique': 'Una mano en pelota, alterna lados, mayor rango unilateral'
        }
    ],
    'judo-pushup': [
        {
            'name': 'Hindu Push-ups',
            'reason': 'Movimiento similar fluido',
            'youtubeUrl': 'https://www.youtube.com/watch?v=oDZ4q4jXGwo',
            'briefTechnique': 'Movimiento fluido de perro hacia arriba a perro hacia abajo'
        },
        {
            'name': 'Dive Bomber Push-ups',
            'reason': 'Variación de movimiento',
            'youtubeUrl': 'https://www.youtube.com/watch?v=mPqyOh8NQAQ',
            'briefTechnique': 'Similar a judo pero movimiento más profundo y controlado'
        }
    ],
    'front-raises': [
        {
            'name': 'Band Front Raise',
            'reason': 'Solo banda elástica',
            'youtubeUrl': 'https://www.youtube.com/watch?v=vryWeqG2b1I',
            'briefTechnique': 'Banda bajo los pies, levanta hacia adelante hasta altura hombros'
        },
        {
            'name': 'Pike Push-ups',
            'reason': 'Sin equipamiento',
            'youtubeUrl': 'https://www.youtube.com/watch?v=x4YNq24tYwM',
            'briefTechnique': 'V invertida, trabaja deltoides frontal como front raise'
        }
    ],
    'db-shoulder-press': [
        {
            'name': 'Pike Push-ups',
            'reason': 'Sin equipamiento',
            'youtubeUrl': 'https://www.youtube.com/watch?v=x4YNq24tYwM',
            'briefTechnique': 'Posición V invertida, baja cabeza hacia suelo flexionando codos'
        },
        {
            'name': 'Handstand Push-ups progresión',
            'reason': 'Avanzado - sin equipamiento',
            'youtubeUrl': 'https://www.youtube.com/watch?v=tQhrk6WMcKw',
            'briefTechnique': 'Contra pared, press vertical completo'
        }
    ],
    'db-upright-row': [
        {
            'name': 'Band Upright Row',
            'reason': 'Solo banda elástica',
            'youtubeUrl': 'https://www.youtube.com/watch?v=vryWeqG2b1I',
            'briefTechnique': 'Banda bajo pies, tira hacia arriba con codos liderando'
        },
        {
            'name': 'High Pull-ups',
            'reason': 'Solo barra',
            'youtubeUrl': 'https://www.youtube.com/watch?v=tZGhA-g1Rkg',
            'briefTechnique': 'Pull-up explosivo tirando más alto que normal'
        }
    ],
    'arnold-press': [
        {
            'name': 'Band Arnold Press',
            'reason': 'Solo banda elástica',
            'youtubeUrl': 'https://www.youtube.com/watch?v=vryWeqG2b1I',
            'briefTechnique': 'Con banda, misma rotación de palmas hacia ti a adelante'
        },
        {
            'name': 'Pike Push-up con rotación',
            'reason': 'Sin equipamiento',
            'youtubeUrl': 'https://www.youtube.com/watch?v=x4YNq24tYwM',
            'briefTechnique': 'Pike push-up con rotación de muñecas durante movimiento'
        }
    ]
}

def add_alternatives_to_exercise(content, exercise_id, alternatives):
    """Add alternatives to a specific exercise"""
    
    # Pattern to find the exercise and its closing bracket
    exercise_pattern = rf'(\{{[\s\n]*id: [\'\"]({exercise_id})[\'\"],[^}}]+?defaultRestSeconds: \d+)(\n\s*\}})'
    
    match = re.search(exercise_pattern, content, re.MULTILINE | re.DOTALL)
    if not match:
        print(f"Warning: Could not find exercise {exercise_id}")
        return content
    
    # Build alternatives string
    alternatives_str = ',\n    alternatives: [\n'
    for alt in alternatives:
        alternatives_str += f'''      {{
        name: '{alt['name']}',
        reason: '{alt['reason']}',
        youtubeUrl: '{alt['youtubeUrl']}',
        briefTechnique: '{alt['briefTechnique']}'
      }},\n'''
    alternatives_str = alternatives_str.rstrip(',\n') + '\n    ]'
    
    # Replace with alternatives added
    new_exercise = match.group(1) + alternatives_str + match.group(3)
    return content.replace(match.group(0), new_exercise)

def main():
    # Read the original file
    with open('src/data/exercises.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add alternatives to specific exercises
    modified_count = 0
    for exercise_id, alternatives in alternatives_data.items():
        old_content = content
        content = add_alternatives_to_exercise(content, exercise_id, alternatives)
        if content != old_content:
            modified_count += 1
            print(f"✅ Added alternatives to {exercise_id}")
        else:
            print(f"❌ Failed to add alternatives to {exercise_id}")
    
    # Write the modified content back
    with open('src/data/exercises.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\n🎯 Successfully added alternatives to {modified_count} exercises")

if __name__ == '__main__':
    main()