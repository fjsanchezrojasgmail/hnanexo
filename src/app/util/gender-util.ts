export class GenderUtil {

  // Mapea un carácter de género a su equivalente como string
  static mapGenderCharToString(gender: string): string {
      switch (gender.toUpperCase()) {
          case 'M':
              return 'Male';
          case 'F':
              return 'Female';
          default:
              return 'Unknown'; // O puedes lanzar un error si lo prefieres
      }
  }

  // Mapea una cadena de género a su equivalente como carácter
  static mapGenderStringToChar(gender: string): string {
      switch (gender.toLowerCase()) {
          case 'male':
              return 'M';
          case 'female':
              return 'F';
          default:
              return ''; // O puedes lanzar un error si lo prefieres
      }
  }

  // Verifica si el género es masculino
  static isMale(gender: string): boolean {
      return ['M', 'Male'].includes(gender.trim().toUpperCase());
  }

  // Verifica si el género es femenino
  static isFemale(gender: string): boolean {
      return ['F', 'Female'].includes(gender.trim().toUpperCase());
  }

  // Verifica si el género no es masculino
  static isNotMale(gender: string): boolean {
      return !this.isMale(gender);
  }

  // Devuelve un icono o símbolo representativo del género
  static getIconGender(gender: string): string {
      switch (gender.trim().toUpperCase()) {
          case 'M':
          case 'MALE':
              return '♂️';  // Símbolo masculino
          case 'F':
          case 'FEMALE':
              return '♀️';  // Símbolo femenino
          default:
              return '⚧️';  // Símbolo neutral/otro (puedes modificar esto según tus necesidades)
      }
  }

  // Mapea un género a su versión estandarizada
  static mapGender(gender: string): string {
      if (this.isMale(gender)) {
          return 'Male';
      }
      if (this.isFemale(gender)) {
          return 'Female';
      }
      return 'Unknown';  // Puedes optar por otra estrategia para géneros no reconocidos
  }

  // Devuelve el género del paciente basado en la fecha de nacimiento y el género proporcionado
  static getPatientGender(birthDate: Date, gender: string): string {
      // Aquí puedes hacer una lógica más compleja si el género no se proporciona explícitamente
      // Usaremos solo el valor de 'gender' por simplicidad (aunque si no se provee, se puede inferir del birthDate).

      // Esto es solo un ejemplo básico de cómo puedes usar birthDate.
      // En la vida real no es recomendable inferir el género por la fecha de nacimiento.

      if (gender) {
          return this.mapGender(gender);  // Si ya tenemos el género, lo estandarizamos
      }

      // En caso de no tener género explícito, se puede intentar inferirlo desde la fecha de nacimiento
      const age = this.calculateAge(birthDate);
      return age < 18 ? 'Unknown' : 'Unknown';  // Aquí deberías tener alguna lógica más robusta para inferir
  }

  // Función para calcular la edad basada en la fecha de nacimiento
  private static calculateAge(birthDate: Date): number {
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }
}
