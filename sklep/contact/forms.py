from django import forms

from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta: 
        model = Contact
        fields = ('first_name','last_name', 'email','message')
        widgets = {
            'first_name' : forms.TextInput(attrs={'placeholder': 'Imie'}),
            'last_name' : forms.TextInput(attrs={'placeholder': 'Nazwisko'}),
            'email' : forms.EmailInput(attrs={'placeholder': 'Email'}),
            'message' : forms.Textarea(
                attrs={'placeholder': 'Napisz wiadomość'}),
            
        }